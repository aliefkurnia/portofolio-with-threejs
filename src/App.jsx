import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Widget,
  Footer,
} from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fungsi untuk mengecek ukuran layar
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ukuran mobile dianggap jika <= 768px
    };

    // Jalankan fungsi saat komponen pertama kali dirender
    handleResize();

    // Tambahkan event listener untuk menangani resize
    window.addEventListener("resize", handleResize);
    // Bersihkan event listener saat komponen dilepas
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-transparent">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <div className={isMobile ? "about-card" : ""}>
          <About />
        </div>
        <Experience />
        <div>
          <Tech />
        </div>
        <Works />
        <Contact />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
