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
          <h3>
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
              Used{" "}
              <strong>
                REACT.JS, TypeScript, and Openshift (Open Source Kubernetes)
              </strong>{" "}
              to work accross the full stack of the Wage Subsidy platform.
              Notable work included bug fixes and bringing several new features
              from conception through testing, and into deployment
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
              Solo developed a custom Sharepoint site for the ELMSD Policy Team:
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
              cutting average Access Permission Grant action time by 80% over
              previous access solution
            </li>
            <li>
              Developed All Users query view for Sharepoint Extranet sites,
              completely ELIMINATING previous worst case access removal scenario
              if user was placed in the wrong access group
            </li>
            <li>
              Currently in process of researching and implementing MS Power
              Automate solution for external user access to Sharepoint Extranet
              sites. Once complete, will completely elimnate need for manual
              addition/removal of External Users to MS Entra Access Package.
              These manual additions/removals consumed about 75% of the previous
              co-op students' time
            </li>
          </ul>
        </div>
      </section>

      <section id="about" className="Section">
        <h2>About Me</h2>
        <div className="about-body">
          <h3>Who am I?</h3>
          <p>
            I'm a 25 year old Software Engineering student at UVic, looking for
            my next great team to be a part of :)
          </p>
          <br />
          <h3>What do I do outside of school and work?</h3>
          <p>
            I love sports, having played hockey for over 20 years. I am
            currently the Captain of the UVic Vikes Hockey Team, and we are
            about to embark on this upcoming season as defending champions of
            the BCIHL, seeking the program's first back to back championship
            win.
            <br />
            <br />
            During my free time I love to play video games, and spend time with
            my lovely girlfriend. Sometimes I am even lucky enough to play video
            games with my lovely girlfriend!
          </p>
          <br />
          <h3>What is my favourite video game?</h3>
          <p>
            I have a few answers for this one. My favourite game as a piece of
            art is Hollowknight. My favourite game to play with friends is
            Fortnite. My favourite game that gets me to plan and think is
            Balatro
          </p>
          <br />
          <h3>Why do I do Software Engineering?</h3>
          <p>
            I love to solve problems, and I love art. Software Engineering is a
            beautiful mix of these two things. I love working with engineers,
            putting to use my leadership skills and experience building elite
            winning cultures.
          </p>
        </div>
      </section>

      <section id="contact" className="Section">
        <h2>Contact</h2>
        <p>ryanstrange@uvic.ca</p>
      </section>
    </div>
  );
}

export default App;
