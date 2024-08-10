import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  PresentationControls,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, scrollY }) => {
  const computer = useGLTF("./future_pc/scene.gltf");

  // State to manage oscillation and rotation
  const [hover, setHover] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [position, setPosition] = useState([0, 0, 0]);

  // Use useFrame to create an oscillating effect for floating
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    setPosition([0, Math.sin(time) * 0.4, 3]); // Slight oscillation in the Y axis for floating
  });

  // Calculate the new position based on scroll
  const adjustedPosition = [
    isMobile ? -4 : -4 - scrollY * -0.02 + position[1],
    isMobile ? 0 : -0.5, // Include oscillation in Y position
    isMobile ? 0 : -3 + scrollY * -0.004, // Adjust the Z position slightly based on scroll
  ];

  return (
    <group
      position={adjustedPosition}
      rotation={rotation} // Apply the oscillation rotation
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
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
          position={[6, 0, 0]} // Ensure this is zeroed out so group position controls it
          rotation={[0, -0.4, 0]}
        />
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 200px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

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
          enablePan={false}
          enableRotate={false}
        />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }} // Controls snapping back to the initial position
          rotation={[-0.8, 2, 0.7]} // Initial rotation
          polar={[-Math.PI / 3, Math.PI / 3]} // Controls vertical rotation limits
          azimuth={[-Math.PI / 1.4, Math.PI / 2]} // Controls horizontal rotation limits
        >
          <Computers isMobile={isMobile} scrollY={scrollY} />
        </PresentationControls>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
