import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const ArcticHazmatRust = () => {
  const arctichazmatrust = useGLTF("/arctic_hazmat_rust/scene.gltf"); // Pastikan path benar

  return (
    <primitive
      object={arctichazmatrust.scene}
      scale={0.6}
      position={[0, -4.5, 0]} // Atur posisi agar lebih terlihat
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
        position: [5, 2, 5], // Sesuaikan posisi kamera
      }}
      style={{ width: "100%", height: "100%" }} // Tambahkan style
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[20, 10, 5]} intensity={1} />
        <ArcticHazmatRust />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ArcticHazmatRustCanvas;
