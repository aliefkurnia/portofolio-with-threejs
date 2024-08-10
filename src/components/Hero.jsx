import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[300px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 bg-transparent`}
      >
        <div className="bg-transparent">
          <h1 className={`${styles.heroHeadText} text-white typing-loop`}>
            Hello, I'm <span className="text-[#535C91]">Alip</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 bg-transparent `}
          >
            Software Developer <br className="sm:block hidden" />
          </p>
        </div>
      </div>
      <ComputersCanvas />

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
