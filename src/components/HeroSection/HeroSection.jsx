import React from "react";
import myPhoto from "../../assets/myPhoto.png";
import { Typewriter } from "react-simple-typewriter";
import "./herosection.css";
const HeroSection = () => {
  return (
    <section>
      <div className="description">
        <h1 className="greeting">Hello here you are!</h1>
        <p className="text">
          I'm
          <span className="name">
            {" "}
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={50}
              loop={0}
              typeSpeed={100}
              words={[" Kaung Htet San"]}
            />
          </span>
          <br />
          Junior front-end web developer. <br />
        </p>
        <button className="contact-btn">Contact me</button>
      </div>
      <div className="photo">
        <img id="myphoto" src={myPhoto} alt="myPhoto" />
      </div>
    </section>
  );
};

export default HeroSection;
