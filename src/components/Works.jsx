import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

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
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
            markers: false, // Jika ingin melihat titik mulainya animasi
          },
        }
      );
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <div
        className="bg-tertiary p-5 rounded-2xl w-full flex items-center gap-20"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      >
        <div
          className="relative w-1/3"
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

        <div className="w-2/3">
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
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const splitText = new SplitType(textRef.current);

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
    <>
      <motion.div variants={textVariant()} className="text-center mt-20">
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex justify-center mt-10">
        <motion.p
          ref={textRef}
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[25px] max-w-7xl mx-auto leading-[41px]"
          data-bg-color="#b6b600"
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
    </>
  );
};

export default SectionWrapper(Works, "");
