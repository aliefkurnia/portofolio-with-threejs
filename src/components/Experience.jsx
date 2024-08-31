import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div className="experience-card p-5 rounded-2xl bg-[#000000bf] text-white mx-4 flex-shrink-0">
      <div className="flex items-center mb-4">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-12 h-12 object-contain"
          style={{ background: experience.iconBg }}
        />
        <div className="ml-4">
          <h3 className="text-[20px] font-bold card-text">
            {experience.title}
          </h3>
          <p className="text-secondary text-[16px] card-text">
            {experience.company_name}
          </p>
        </div>
      </div>
      <ul className="list-disc ml-5 space-y-2 text-left">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[14px] card-text"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  const extendedExperiences = [...experiences, ...experiences, ...experiences];

  return (
    <section className="text-center items-center mt-20 pt-10 overflow-hidden">
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="relative">
        <div
          className="flex overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex"
            animate={isHovered ? { x: 0 } : { x: [0, -2000] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ display: "flex" }}
          >
            {extendedExperiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
