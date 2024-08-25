import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[400px] w-full flex justify-center">
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      className="p-4 rounded-[20px] relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-8 flex flex-col justify-center items-center min-h-[180px]"
        style={{ background: "rgba(0, 0, 0, 0.75)" }}
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
        <h3
          className="text-white text-[20px] font-bold text-center"
          style={{ textShadow: "0px 10px 15px rgba(0, 0, 0, 0.4)" }}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      // Split text into characters
      const splitText = new SplitType(textRef.current, { types: "chars" });

      // GSAP animation
      gsap.fromTo(
        splitText.chars,
        { color: "transparent" },
        {
          color: "teal",
          duration: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 50%",
            end: "top 30%",
            scrub: true,
            markers: false,
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto text-center flex flex-col items-center pt-20 ">
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mx-auto">
        <p className={`${styles.sectionSubText} text-base md:text-xl`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-4xl md:text-6xl`}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
        ref={textRef}
        className="mt-4 text-secondary text-base sm:text-2xl sm:leading-8 max-w-7xl mx-auto leading-6"
      >
        I'm committed to developing efficient, scalable, and user-friendly web
        solutions. With nearly two years of experience in web development using
        .NET Core and a strong background in JavaScript frameworks like React.js
        and Express.js, I’m passionate about tackling complex challenges.
        Currently, I'm also delving into Three.js to enhance my skill set. I’m
        eager to collaborate on innovative projects and turn creative concepts
        into impactful, real-world applications.
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-5 justify-center mx-auto">
        {services.map((service, index) => (
          <ServiceCard index={index} key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
