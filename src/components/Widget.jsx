import React, { useEffect, useState } from "react";
import "./index"; // Pastikan path ke file CSS benar
import { instagram, linkedin } from "../assets"; // Hapus import astrowidget jika tidak diperlukan

const Widget = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showing, setShowing] = useState(false);
  const [widgetVisible, setWidgetVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePopup = () => {
    if (showPopup) {
      setShowing(false); // Start hiding animation for popup
      setWidgetVisible(true); // Make widget icon visible for sliding in
      setTimeout(() => {
        setShowPopup(false);
        setWidgetVisible(true); // Ensure widget is visible after popup hides
      }, 500); // Match the animation duration
    } else {
      setShowPopup(true);
      setShowing(true); // Start showing animation for popup
      setWidgetVisible(false); // Hide widget icon initially
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (!isHovered && showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        setWidgetVisible(true); // Ensure widget is visible after popup hides
      }, 0); // Adjust this delay to keep the popup open longer if desired

      return () => clearTimeout(timer);
    }
  }, [isHovered, showPopup]);

  return (
    <>
      {widgetVisible && !showPopup && (
        <div
          className="fixed bottom-2 right-2 z-50 cursor-pointer widget-slide-in w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40"
          onClick={togglePopup}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            width: 0,
            height: 0,
            borderLeft: "50px solid transparent",
            borderRight: "50px solid transparent",
            borderBottom: "100px solid #007bff",
            position: "relative",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: "1.5",
              fontSize: "14px",
            }}
          >
            Let's Connect
          </div>
        </div>
      )}

      {showPopup && (
        <div
          className="fixed bottom-2 right-2 z-50 bg-white p-4 rounded-lg shadow-lg transition-transform transform scale-0 popup"
          style={{ transform: showing ? "scale(1)" : "scale(0)" }}
        >
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              <img src={instagram} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Widget;
