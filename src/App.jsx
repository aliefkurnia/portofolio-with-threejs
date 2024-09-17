import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Widget,
  Footer,
  CustomCursor,
} from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-transparent">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <div className={isMobile ? "about-card" : ""}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
        </div>
        <Footer />
        {!isMobile && <CustomCursor />}{" "}
        {/* Render CustomCursor only on non-mobile devices */}
      </div>
    </BrowserRouter>
  );
};

export default App;
