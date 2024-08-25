import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  // State untuk menentukan apakah tampilan adalah mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Fungsi untuk memperbarui state saat ukuran layar berubah
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Tambahkan event listener
    window.addEventListener("resize", handleResize);

    // Hapus event listener saat komponen tidak lagi digunakan
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[300px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-start gap-5 bg-transparent`}
      >
        <div className="bg-transparent">
          <h1 className={`${styles.heroHeadText} text-white typing-loop`}>
            Hello, I'm <span className="text-[#008080]">Alip</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 bg-transparent `}
          >
            Software Developer <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      {/* Menampilkan ComputersCanvas hanya jika bukan tampilan mobile */}
      {!isMobile && (
        <div className="absolute inset-0 flex justify-center items-center">
          <ComputersCanvas loading="lazy" />
        </div>
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex flex-col justify-center items-center bg-transparent">
        <a href="#about">
          <div className="flex flex-col items-center bg-transparent">
            <svg
              className="animate-bounce w-8 h-8 text-secondary mb-1 bg-transparent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <p className="text-sm text-secondary bg-transparent">Scroll Down</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
