import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useSwipeable } from "react-swipeable";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      className="experience-card p-5 rounded-2xl bg-[#000000bf] text-white mx-2 flex-shrink-0 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg select-none"
      style={{ userSelect: "none", minWidth: "300px" }} // Prevent text selection and ensure min width
    >
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
  const [currentIndex, setCurrentIndex] = useState(0); // Start from 0
  const slideRef = useRef(null);
  const slideWidth = 500; // Increase width for wider cards
  const totalSlides = experiences.length; // Total number of slides

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return totalSlides - 1; // Move to the last card
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === totalSlides - 1) {
        return 0; // Move to the first card
      }
      return prevIndex + 1;
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enable mouse swipe for testing
  });

  return (
    <section className="text-center items-center mt-20 pt-10 overflow-hidden">
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="relative">
        <div className="overflow-x-auto w-full">
          <motion.div
            className="flex"
            ref={slideRef}
            animate={{ x: -currentIndex * slideWidth }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ display: "flex", width: `${slideWidth * totalSlides}px` }}
            {...swipeHandlers} // Attach swipe handlers
          >
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </motion.div>
        </div>
        <div className="flex justify-between items-center mt-6 px-6">
          {" "}
          {/* Increased padding */}
          <button
            onClick={handlePrev}
            className="bg-gray-800 text-white p-3 rounded-full"
          >
            &lt; Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-800 text-white p-3 rounded-full"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
