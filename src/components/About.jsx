import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[200px] w-full parallax-effect-glare-scale"
    perspective={400}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
    gyroscope={true}
  >
    <motion.div
      variants={slideIn("right", "spring", index * 0.5, 0.75)}
      className="p-[2px] rounded-[20px] relative overflow-hidden"
      style={{ transformStyle: "preserve-3d" }} // Enable 3D transform on the container
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col inner-elemen "
        style={{
          background: "rgba(1, 32, 78, 0.85)",
        }}
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3
          className="text-white text-[20px] font-bold text-center"
          style={{
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
    <section className="relative w-full h-screen mx-auto text-center ">
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
