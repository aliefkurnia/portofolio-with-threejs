import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF, PresentationControls } from "@react-three/drei";

import CanvasLoader from "../Loader";

const ArcticHazmatRust = () => {
  const arctichazmatrust = useGLTF("/arctic_hazmat_rust/scene.gltf");

  return (
    <primitive
      object={arctichazmatrust.scene}
      scale={0.6}
      position={[0, -4.5, 0]}
      rotation-y={0}
    />
  );
};

const ArcticHazmatRustCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [5, 2, 5],
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <ArcticHazmatRust />
        </PresentationControls>
        <ambientLight intensity={1} />
        <directionalLight position={[20, 10, 5]} intensity={1} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ArcticHazmatRustCanvas;
