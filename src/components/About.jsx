import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{
      max: 25,
      scale: 1.05,
      speed: 400,
    }}
  >
    <motion.div
      variants={slideIn("right", "spring", index * 0.5, 0.75)}
      className="p-[2px] rounded-[20px] relative overflow-hidden "
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative z-20"
        style={{
          background: "rgba(1, 32, 78, 0.85)", // Mengubah background menjadi sedikit transparan
          transform: "perspective(1000px)",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          style={{
            transform: "translateZ(40px)",
            boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.5)",
          }}
        />
        <h3
          className="text-white text-[20px] font-bold text-center"
          style={{
            transform: "translateZ(30px)",
            textShadow: "0px 10px 15px rgba(0, 0, 0, 0.4)",
          }}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="relative w-full h-screen mx-auto text-center">
      <motion.div variants={textVariant()} className="mx-auto">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
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

      <div className="mt-20 flex flex-wrap gap-10 justify-center mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
