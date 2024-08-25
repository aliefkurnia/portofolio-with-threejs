import React from "react";
import { Link } from "react-router-dom";
import { instagram, linkedin } from "../assets"; // Sesuaikan path ke gambar ikon sosial Anda

const Footer = () => {
  return (
    <footer className="bg-dark py-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Section untuk informasi hak cipta */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()} Muchammad Alief Kurnia Wijaya.
              All rights reserved.
            </p>
          </div>

          {/* Section untuk tautan tambahan */}
          <div className="flex justify-center md:justify-end items-center">
            <a className="footer-link mx-2">Lets Connect</a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link "
            >
              <img src={instagram} alt="Instagram" className="footer-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link "
            >
              <img src={linkedin} alt="LinkedIn" className="footer-logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
