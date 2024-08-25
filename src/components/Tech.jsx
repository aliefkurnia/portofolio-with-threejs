import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import { technologies } from "../constants"; // Ensure this path is correct
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

// Helpers
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Tech() {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(technologies.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === technologies.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  // Define motion variants for swipe animation
  const swipeAnimationLeft = {
    animate: {
      x: [-7, 0], // Move slightly to the left and back
    },
    transition: {
      duration: 0.5,
      repeat: Infinity, // Repeat the animation
      repeatType: "reverse", // Reverse the direction after each iteration
    },
  };

  const swipeAnimationRight = {
    animate: {
      x: [7, 0], // Move slightly to the right and back
    },
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  return (
    <section
      style={{
        height: "85vh", // Increase the height of the Tech section
        padding: "5rem 0", // Add padding to the top and bottom
        backgroundColor: "transparent", // Set background to transparent
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
      className="text-center"
    >
      <motion.div variants={textVariant()} className="mx-auto">
        <h2 className={`${styles.sectionHeadText} text-center`}>Tech Card.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
      >
        These are the technologies I've used throughout my journey in web
        development and various projects.
      </motion.p>
      <div
        style={{
          background: "#FEAE6F",
          cursor:
            "url(https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png) 25 25, auto",
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div
            key={i}
            style={{
              position: "absolute",
              width: "300px",
              height: "200px",
              willChange: "transform",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              touchAction: "none",
              x,
              y,
            }}
          >
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${technologies[i].icon})`,
                backgroundColor: "white",
                backgroundSize: "auto 85%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                width: "45vh",
                maxWidth: "150px",
                height: "85vh",
                maxHeight: "285px",
                willChange: "transform",
                borderRadius: "10px",
                boxShadow:
                  "0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)",
              }}
            />
          </animated.div>
        ))}
      </div>
      <p
        style={{
          color: "#666", // Optional: Change text color
          fontSize: "2rem", // Adjust font size
          textAlign: "center", // Center the text
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <motion.span {...swipeAnimationLeft}>&lt;</motion.span> swipe{" "}
        <motion.span {...swipeAnimationRight}>&gt;</motion.span>
      </p>
    </section>
  );
}

export default Tech;
