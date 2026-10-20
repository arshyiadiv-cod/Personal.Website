import "../component.css/Hero.css";
import SocialIcons from "./SocialIcons.jsx";
import { socialLinks, TELEGRAM_URL } from "../socials.js";
import arshiyaImg from "../Img/arshiya.img.png";

function Hero() {
  return (
    <section className="hero" id="Home" aria-label="Introduction">
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />

      <div className="hero-content">
        <div className="Introduction">
          <p id="hello" className="reveal reveal-1">
            HELLO, I'M
            <span className="hello-line" aria-hidden="true" />
          </p>

          <h1 className="hero-name reveal reveal-2">
            <span id="arshiya">ARSHIYA</span>
            <span id="zarnegar">ZARNEGAR</span>
          </h1>

          <h2 id="front" className="reveal reveal-3">
            FRONT-END DEVELOPER
          </h2>

          <p id="Experience" className="reveal reveal-4">
            I build modern, responsive and user-friendly web experiences with
            clean code and creative design.
          </p>

          <div className="hero-ctas reveal reveal-5">
            <a id="VIW-project" href="#Projects">
              View My Projects →
            </a>
            <a
              className="hero-secondary"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Talk
            </a>
          </div>

          <div className="reveal reveal-6">
            <SocialIcons links={socialLinks} />
          </div>
        </div>

        <div className="hero-visual reveal reveal-image">
          <div className="hero-ring" aria-hidden="true" />
          <div className="hero-image-glow" aria-hidden="true" />
          <div className="hero-image">
            <img
              src={arshiyaImg}
              alt="عرشیا زرنگار (Arshiya Zarnegar)، فرانت‌اند دولوپر مقیم تهران"
              width="640"
              height="590"
            />
          </div>
          <div className="hero-floor" aria-hidden="true" />
        </div>
      </div>

      <div className="hero-bottom">
        <span className="location">BASED IN ● IRAN — TEHRAN</span>
        <a className="scroll" href="#Projects">
          SCROLL DOWN
          <span className="scroll-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
