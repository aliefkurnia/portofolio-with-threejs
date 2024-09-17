import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    // Menentukan warna gradasi biru ke hijau
    const gradientColors = [
      "#00d4ff", // Biru pirus terang
      "#00e5a0", // Hijau mint cerah
      "#00c2a0", // Hijau pirus sedang
      "#00b3a0", // Hijau teal lembut
      "#00b4d9", // Biru muda
      "#00d9c1", // Hijau mint sangat terang
      "#00e1b2", // Hijau pirus lembut
      "#00b0a1", // Hijau teal gelap
      "#00a9a0", // Hijau teal sedang
      "#009e99", // Hijau teal gelap
    ];

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      // Mengatur warna latar belakang dengan gradasi
      circle.style.background = `linear-gradient(45deg, ${
        gradientColors[index % gradientColors.length]
      } 0%, ${gradientColors[(index + 1) % gradientColors.length]} 100%)`;
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        // Posisi lebih panjang dari biasanya
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        // Mengatur jarak untuk memberikan efek ekor
        circle.style.transform = `scale(${
          (circles.length - index) / circles.length
        })`;

        circle.x = x;
        circle.y = y;

        // Meningkatkan smoothness dengan mengurangi faktor interpolasi
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.1; // Faktor interpolasi kecil untuk smoothness
        y += (nextCircle.y - y) * 0.1;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  const circleStyle = {
    height: "10px",
    width: "10px",
    borderRadius: "25px",
    position: "fixed",
    top: "0",
    left: "0",
    pointerEvents: "none",
    zIndex: "99999999", // so that it stays on top of all other elements
    transform: "scale(0.5)",
    transition: "transform 0.5s ease",
  };

  return (
    <>
      {Array.from({ length: 400 }).map((_, index) => (
        <div key={index} className="circle" style={circleStyle}></div>
      ))}
    </>
  );
};

export default CustomCursor;
