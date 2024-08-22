import React, { useEffect, useState } from "react";
import "./index"; // Import the CSS file
import { instagram, astrowidget, linkedin } from "../assets";
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
          className="fixed bottom-2 right-2 z-50 cursor-pointer widget-slide-in w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 overflow-hidden"
          onClick={togglePopup}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={astrowidget}
            alt="Widget Icon"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {showPopup && (
        <div
          className={`fixed bottom-2 right-2 z-50 p-4 rounded-lg shadow-lg ${
            showing ? "popup-show" : "popup-hide"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/aliefkurniaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              <img
                src={instagram}
                alt="Instagram"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
            </a>
            <a
              href="https://linkedin.com/aliefkurnia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Widget;
