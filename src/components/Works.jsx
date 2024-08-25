import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className="bg-tertiary p-5 rounded-2xl w-full flex flex-col lg:flex-row items-center gap-6"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      >
        <div
          className="relative w-full lg:w-1/3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={image}
            alt="project_image"
            className={`w-full h-auto object-cover rounded-xl transition-all duration-300 ${
              isHovered ? "brightness-75" : ""
            }`}
          />
          {isHovered && (
            <div className="absolute inset-0 flex justify-center items-center">
              <p
                className="text-white text-lg font-bold cursor-pointer"
                onClick={() => window.open(website_link, "_blank")}
              >
                Jump to website
              </p>
            </div>
          )}
        </div>

        <div className="w-full lg:w-2/3 mt-4 lg:mt-0">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          <div className="mt-4">
            <button
              className="px-4 py-2 bg-primary text-white rounded-lg"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              View Code
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section style={{ marginBottom: "6rem" }}>
      <motion.div variants={textVariant()} className="text-center mt-20">
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex justify-center mt-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
