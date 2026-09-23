import "../component.css/Hero.css";

// ===============================
// SOCIAL MEDIA ICONS
// ===============================

import githubSvg from "../img/github-svg.svg";
import instaSvg from "../img/insta-svg.svg";
import linkedinSvg from "../img/linkedin-svg.svg";
import phoneSvg from "../img/phone-svg.svg";

// ===============================
// HERO IMAGE
// ===============================

import arshiyaImg from "../img/arshiya.img.jpg";

// ===============================
// HERO COMPONENT
// ===============================

function Hero() {
  return (
    // ===============================
    // HERO SECTION
    // ===============================

    <section className="hero">
      {/* =========================
          HERO CONTENT
      ========================= */}

      <div className="hero-content">
        {/* =========================
            INTRODUCTION
        ========================= */}

        <div className="Introduction">
          {/* HELLO TEXT */}
          <p id="hello">HELLO, I'M ─────</p>

          {/* NAME */}
          <h1 id="arshiya">ARSHIYA</h1>

          <h1 id="zarnegar">ZARNEGAR</h1>

          {/* JOB */}
          <h2 id="front">FRONT-END DEVELOPER</h2>

          {/* EXPERIENCE / DESCRIPTION */}
          <div id="Experience">
            <p>I build modern, responsive and user-friendly</p>

            <p>web experiences with clean code and</p>

            <p>creative design.</p>
          </div>

          {/* PROJECT BUTTON */}

          <a id="VIW-project" href="#projects">
            View My Projects →
          </a>

          {/* =========================
              SOCIAL MEDIA
          ========================= */}

          <div className="img-icon">
            <img src={githubSvg} alt="GitHub" />

            <img src={instaSvg} alt="Instagram" />

            <img src={linkedinSvg} alt="LinkedIn" />

            <img src={phoneSvg} alt="Phone" />
          </div>
        </div>

        {/* =========================
            HERO IMAGE
        ========================= */}

        <div className="hero-image">
          <img src={arshiyaImg} alt="Arshiya" />
        </div>
      </div>

      {/* =========================
          HERO BOTTOM
      ========================= */}

      <div className="hero-bottom">
        {/* LOCATION */}

        <span className="location">BASED IN ● IRAN — TEHRAN</span>

        {/* SCROLL */}

        <span className="scroll">SCROLL DOWN ↓</span>
      </div>
    </section>
  );
}

// ===============================
// EXPORT
// ===============================

export default Hero;
