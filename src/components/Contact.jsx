import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { ArcticHazmatRustCanvas } from "./canvas";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import cv from "../assets/Muchammad Alief Kurnia Wijaya-resume.pdf";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Alief Kurnia",
          from_email: form.email,
          to_email: "aliefkw26@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMessage(
            "Thank you. I will get back to you as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setErrorMessage("Ahh, something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        style={{ backgroundColor: "rgba(1, 32, 78, 0.85)" }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              maxLength={200}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              style={{ resize: "none" }}
              required
            />
          </label>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-transform duration-300 transform hover:scale-105"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-transform duration-300 transform hover:scale-105"
              style={{ color: "rgba(1, 32, 78, 0.85)" }}
            >
              View CV
            </a>
          </div>

          {successMessage && (
            <p className="text-green-500 mt-4">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <ArcticHazmatRustCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
