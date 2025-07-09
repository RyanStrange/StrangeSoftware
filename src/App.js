import logo from "./logo.svg";
import "./App.css";
import "./fonts.css/IBM_Plex_Mono/IBMPlexMono-Regular.ttf";
import DecryptedText from "./components/DecryptedText";
import { React, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { BiFontSize } from "react-icons/bi";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <div className="menu">
        <IoMenu onClick={toggleMenu} />
        {menuOpen && (
          <div className="mobile-menu">
            <p>Home</p>
            <p>Portfolio</p>
            <p>Work Experience</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        )}
      </div>

      <header className="header">
        <DecryptedText
          speed={100}
          text="Home"
          sequential={true}
          animateOn="view"
        ></DecryptedText>
        <DecryptedText
          speed={100}
          text="Portfolio"
          sequential={true}
          animateOn="view"
        ></DecryptedText>
        <DecryptedText
          speed={75}
          text="Work Experience"
          sequential={true}
          animateOn="view"
        ></DecryptedText>
        <DecryptedText
          speed={100}
          text="About"
          sequential={true}
          animateOn="view"
        ></DecryptedText>
        <DecryptedText
          speed={100}
          text="Contact"
          sequential={true}
          animateOn="view"
        ></DecryptedText>
      </header>
      <div className="Title">
        <h1>
          {" "}
          <DecryptedText
            speed={50}
            text="Ryan Strange"
            sequential={true}
            animateOn="view"
          ></DecryptedText>
        </h1>
        <h2>
          {" "}
          <DecryptedText
            speed={50}
            text="Software Engineer"
            sequential={true}
            animateOn="view"
          ></DecryptedText>
        </h2>
      </div>
      <div className="SalesPitch">
        <p>
          {" "}
          <DecryptedText
            speed={50}
            text="Welcome to Strange Software :)"
            sequential={true}
            animateOn="view"
          ></DecryptedText>
        </p>
        <p>
          {" "}
          <DecryptedText
            speed={50}
            text="Please enjoy this small showcase of my life and work"
            sequential={true}
            animateOn="view"
          ></DecryptedText>
        </p>
      </div>
    </div>
  );
}

export default App;
