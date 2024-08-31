import React from "react";
import { instagram, linkedin } from "../assets"; // Sesuaikan path ke gambar ikon sosial Anda

const Footer = () => {
  return (
    <footer className="bg-dark py-1 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Section untuk informasi hak cipta */}
          <div className="text-center md:text-left mb-2 md:mb-0 text-xs md:text-sm">
            <p>
              &copy; {new Date().getFullYear()} Muchammad Alief Kurnia Wijaya.
              All rights reserved.
            </p>
          </div>

          {/* Section untuk tautan tambahan */}
          <div className="flex justify-center md:justify-end items-center space-x-2">
            <a className="footer-link">Lets Connect</a>
            <a
              href="https://www.instagram.com/aliefkurniaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="footer-logo w-5 h-5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aliefkurnia"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="footer-logo w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
