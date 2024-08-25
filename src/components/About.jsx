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
  <div className="xs:w-[200px] w-full parallax-effect-glare-scale">
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      className="p-[2px] rounded-[20px] relative overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col inner-elemen"
        style={{ background: "rgba(0, 0, 0, 0.75)" }}
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
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
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            markers: false,
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto text-center pb-20">
      {" "}
      {/* Added padding-bottom */}
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mx-auto">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        ref={textRef}
        className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]"
      >
        I'm committed to developing efficient, scalable, and user-friendly web
        solutions. With nearly two years of experience in web development using
        .NET Core and a strong background in JavaScript frameworks like React.js
        and Express.js, I’m passionate about tackling complex challenges.
        Currently, I'm also delving into Three.js to enhance my skill set. I’m
        eager to collaborate on innovative projects and turn creative concepts
        into impactful, real-world applications.
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-10 justify-center mx-auto">
        {services.map((service, index) => (
          <ServiceCard index={index} key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
