import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, scrollY }) => {
  const computer = useGLTF("./future_pc/scene.gltf");

  // Calculate the new position based on scroll
  const adjustedPosition = [
    isMobile ? -4 : -4,
    isMobile ? 0 : -0.5 + scrollY * 0.002, // Adjust the Y position slightly based on scroll
    isMobile ? 0 : -3 + scrollY * 0.004, // Adjust the Z position slightly based on scroll
  ];

  return (
    <group position={adjustedPosition} rotation={[0, -0.1, 0]}>
      <mesh>
        <hemisphereLight intensity={0.3} groundColor="black" />
        <spotLight
          position={[40, 50, 20]}
          angle={0.5}
          penumbra={0.5}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.1 : 0.2}
          position={[0, 0, 0]} // Position is now controlled by group
          rotation={[0, 1, 0]}
        />
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0); // State to track scroll position

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 200px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Listen to scroll event
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} scrollY={scrollY} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
