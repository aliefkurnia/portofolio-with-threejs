import React, { useState, useRef } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const slideWidth = 300; // Adjust this value based on your card width and spacing

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="text-center items-center mt-20 pt-10 overflow-hidden">
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="relative">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex"
            ref={slideRef}
            animate={{ x: -currentIndex * slideWidth }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ display: "flex" }}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </motion.div>
        </div>
        <div className="flex justify-between items-center mt-4 px-4">
          <motion.button
            onClick={handlePrev}
            className="bg-gray-800 text-white p-2 rounded-full flex items-center justify-center"
            whileHover={{ x: -10 }} // Move left
            whileTap={{ scale: 0.9 }} // Optional: Scale down on click
          >
            &lt; Previous
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="bg-gray-800 text-white p-2 rounded-full flex items-center justify-center"
            whileHover={{ x: 10 }} // Move right
            whileTap={{ scale: 0.9 }} // Optional: Scale down on click
          >
            Next &gt;
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
