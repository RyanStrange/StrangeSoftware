import "./App.css";
import "./fonts.css";
import { React, useState } from "react";
import { IoMenu } from "react-icons/io5";
import ProjectCard from "./components/ProjectCard";
import {
  cLogo,
  jsLogo,
  jsonLogo,
  psLogo,
  puppeteerLogo,
  reactLogo,
  twilioLogo,
  vercelLogo,
} from "./assets/tech-stack-imgs.js";

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
          <h2>Software Engineer</h2>
        </div>
        <div className="SalesPitch">
          <p>Welcome to Strange Software :)</p>
          <p>Please enjoy this small showcase of my life and work</p>
        </div>
      </section>
      <section id="portfolio" className="Section">
        <h2>Portfolio</h2>
        <p className="SectionDescription">
          Projects I've made outside of school and work
        </p>
        <div className="project-card-container">
          <ProjectCard
            images={[puppeteerLogo, jsLogo, jsonLogo]}
            title="UVic SENG Course Scraper"
            description="Scraper used to gather available courses with pre-req info
            for UVic Software Engineering students. Written in JavaScript using Puppeteer,
            storing the gathered info in a JSON file"
            link="https://github.com/RyanStrange/ECS-Course-Scraper"
          />
          <ProjectCard
            images={[jsLogo, reactLogo, vercelLogo]}
            title="StrangeSoftware.ca"
            description="My Portfolio site. Used to practice 
          my React knowledge and sharpen my skills building responsive websites, check me out on 
          mobile!. Made using Create React App and Node.js, deployed on Vercel"
            link="https://github.com/RyanStrange/StrangeSoftware"
          />
          <ProjectCard
            title="JackFM Scraper"
            images={[puppeteerLogo, jsLogo, twilioLogo]}
            description="JavaScript scraper built as a proof of concept for winning radio contest. 
            Needed to monitor for songs played more than once per day. 
            Scrapes live songs on Jack.FM site using Puppeteer, and uses Twilio
            to alert users when a repeat is detected. Not used for real contest"
            link="https://github.com/RyanStrange/JackFM-Song-Scraper"
          />
          <ProjectCard
            title="Study Room Booking Bot"
            images={[cLogo, psLogo]}
            description="Powershell and C script I wrote with my friends in first year to reserve 
            our favourite study room all day every day while we were at Camosun College. I could do it
            a lot more efficiently with what I know now, but this was the project that made me choose
            Software Engineering so I like to leave it untouched :)"
            link="https://github.com/RyanStrange/BookBotPublic"
          />
        </div>
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
