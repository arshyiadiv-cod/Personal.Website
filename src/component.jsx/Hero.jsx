import "../component.css/Hero.css";

import githubSvg from "../img/github-svg.svg";
import instaSvg from "../img/insta-svg.svg";
import linkedinSvg from "../img/linkedin-svg.svg";
import phoneSvg from "../img/phone-svg.svg";
import arshiyaImg from "../img/arshiya.img.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="Introduction">
          <p id="hello">HELLO, I'M ─────</p>

          <h1 id="arshiya">ARSHIYA</h1>

          <h1 id="zarnegar">ZARNEGAR</h1>

          <h2 id="front">FRONT-END DEVELOPER</h2>

          <div id="Experience">
            <p>I build modern, responsive and user-friendly</p>
            <p>web experiences with clean code and</p>
            <p>creative design.</p>
          </div>

          <a id="VIW-project" href="#projects">
            View My Projects →
          </a>

          <div className="img-icon">
            <img src={githubSvg} alt="GitHub" />

            <img src={instaSvg} alt="Instagram" />

            <img src={linkedinSvg} alt="LinkedIn" />

            <img src={phoneSvg} alt="Phone" />
          </div>
        </div>

        <div className="hero-image">
          <img src={arshiyaImg} alt="Arshiya" />
        </div>
      </div>

      <div className="hero-bottom">
        <span className="location">BASED IN ● IRAN</span>

        <span className="scroll">SCROLL DOWN ↓</span>
      </div>
    </section>
  );
}

export default Hero;
