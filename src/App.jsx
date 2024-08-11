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
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-transparent">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <div className="relative z-0">
          <Tech />
        </div>
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        <Widget />
      </div>
    </BrowserRouter>
  );
};

export default App;
