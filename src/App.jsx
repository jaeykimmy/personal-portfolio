import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
// import TagCloud from "TagCloud";
import Technologies from "./components/Technologies/Technologies";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import "./components/background.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Technologies />
        {/* <TagCloud /> */}
        {/* <Works /> */}
        {/* <Portfolio /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
