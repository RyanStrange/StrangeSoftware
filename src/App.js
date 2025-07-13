import logo from "./logo.svg";
import "./App.css";
import "./fonts.css/IBM_Plex_Mono/IBMPlexMono-Regular.ttf";
import DecryptedText from "./components/DecryptedText";
import { React, useState } from "react";
import { IoMenu } from "react-icons/io5";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="App">
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
      )}
      <div className="menu">
        <IoMenu className="menu-btn" onClick={toggleMenu} />
        {menuOpen && (
          <div className="mobile-menu-tray">
            <a
              href="#home"
              className="mobile-menu-item"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="mobile-menu-item"
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#workexperience"
              className="mobile-menu-item"
              onClick={() => setMenuOpen(false)}
            >
              Work Experience
            </a>
            <a
              href="#about"
              className="mobile-menu-item"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="mobile-menu-item"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
      <header className="header">
        <a href="#home">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#workexperience">Work Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </header>

      <section id="home" className="HomeSection">
        <div className="Title">
          <h1>Ryan Strange</h1>
          <h2>
            {" "}
            {/* <DecryptedText
              speed={50}
              text="Software Engineer"
              sequential={true}
              animateOn="load"
            ></DecryptedText> */}
            Software Engineer
          </h2>
        </div>
        <div className="SalesPitch">
          <p>
            {" "}
            {/* <DecryptedText
              speed={50}
              text="Welcome to Strange Software :)"
              sequential={true}
              animateOn="load"
            ></DecryptedText> */}
            Welcome to Strange Software :)
          </p>
          <p>
            {/* {" "}
            <DecryptedText
              speed={50}
              text="Please enjoy this small showcase of my life and work"
              sequential={true}
              animateOn="load"
            ></DecryptedText> */}
            Please enjoy this small showcase of my life and work
          </p>
        </div>
      </section>
      <section id="portfolio" className="Section">
        <h2>Portfolio</h2>
        <p>Projects will go here</p>
      </section>

      <section id="workexperience" className="Section">
        <h2>Work Experience</h2>
        <p>Work details here</p>
      </section>

      <section id="about" className="Section">
        <h2>About Me</h2>
        <p>Bio or background info here</p>
      </section>

      <section id="contact" className="Section">
        <h2>Contact</h2>
        <p>Form or contact info here</p>
      </section>
    </div>
  );
}

export default App;
