import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [speed, setSpeed] = useState(0.01); // Default slow speed
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for reverse

  // Membuat posisi sphere dengan validasi NaN
  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });

    // Periksa apakah ada nilai NaN dalam posisi
    if (positions.some((value) => isNaN(value))) {
      console.error("NaN detected in sphere positions:", positions);
    }

    return positions;
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setSpeed(0.05); // Increase speed
        setDirection(1); // Normal direction
      } else {
        // Scrolling up
        setSpeed(0.05); // Increase speed
        setDirection(-1); // Reverse direction
      }
      lastScrollY = currentScrollY;

      // Reset speed to slow after a short delay
      setTimeout(() => {
        setSpeed(0.01); // Slow down after scrolling stops
      }, 150); // Adjust the delay as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * speed * direction;
    ref.current.rotation.y += delta * speed * 1.5 * direction;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Gunakan "geometry" dan "args" untuk menghindari masalah posisi NaN */}
      <Points ref={ref} args={[sphere]} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
