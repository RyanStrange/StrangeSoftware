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
        <div className="work-xp-body">
          <h3 className="work-xp-title">
            Software Engineer and Web Analyst
            <br />
            BC Gov Ministry of Social Development and Poverty Reduction
            <br />
            Jan 2025 - Aug 2025
            <br />
            <br />
          </h3>
          <p>
            During my 8 month co-op within the SDPR's Employment and Labour
            Market Services Division Development Team, I was fortunate to work
            on a variety of projects that aim to help the people of British
            Columbia:
          </p>
          <br />
          <br />
          <ul className="work-xp-list">
            <li>
              Used <strong>REACT.JS</strong> to work on the Wage Subsidy
              platform, including bug fixes and bringing several features from
              conception through testing, and into deployment
            </li>
            <li>
              Worked on the WorkBC Mobile App using{" "}
              <strong>REACT NATIVE</strong>, focusing on UI improvements and bug
              fixes
            </li>
            <li>
              Managed content and access for internal knowledge Sharepoint sites
              with 1000+ users
            </li>

            <li>
              Developed a custom Sharepoint site for the ELMSD Policy Team:
            </li>
            <ul className="ELMSDR-work-list">
              <li>
                Elicited requirements over several weeks from non-technical
                stakeholders
              </li>
              <li>Organized a development schedule in an Agile style</li>
              <li>
                Conducted weekly check-in's with stakeholders to validate and
                verify requirements
              </li>
              <li>
                Developed the site with scalability in mind, focusing on ease of
                access and searchability for the two document libraries that
                grew to hold 1000+ internal documents after launch
              </li>
              <li>
                Researched Sharepoint best practices for filtering and searching
                to implement tagging system and several custom views for quick
                categorized queries in the Document Libraries
              </li>
              <li>
                Presented and launched site during a Division-wide All Hands
                Meeting to 1000+ users
              </li>
            </ul>
            <li>
              Lobbied for and lead transition to MS Entra Access Package for
              managing external user access to Sharepoint Extranet Sites,
              cutting average Access Permission Grant action by 80% over
              previous access solution
            </li>
            <li>
              Developed All Users query view for Sharepoint Extranet sites,
              completely ELIMINATING previous worst case access removal scenario
              if user was placed in the wrong access group{" "}
            </li>
          </ul>
        </div>
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
