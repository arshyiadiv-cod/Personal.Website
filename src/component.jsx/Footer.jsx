import "../component.css/Footer.css";
import { TELEGRAM_URL } from "../socials.js";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="brand-footer">
          <h2>ARSHIYA.ZARNEGAR</h2>
          <p>FRONT-END.DEVELOPER</p>
          <span>
            I build modern, responsive and user-friendly web experiences.
          </span>
        </div>

        <div className="link-footer">
          <h3>Quick Links</h3>
          <a href="#Home">Home →</a>
          <a href="#About">About →</a>
          <a href="#Skills">Skills →</a>
          <a href="#Projects">Projects →</a>
        </div>

        <div className="contact-footer">
          <h3>Contact</h3>
          <p>
            <a href="mailto:arshyiadiv@gmail.com">✉ arshyiadiv@gmail.com</a>
          </p>
          <p>⌖ IRAN, TEHRAN</p>
          <p>
            <a href="tel:+989395913600">☎ +98 9395913600</a>
          </p>
          <p>
            <a href="tel:+989905349231">☎ +98 9905349231</a>
          </p>
          <p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              ✈ Telegram @Arshiyazarnegar
            </a>
          </p>
        </div>

        <div className="cta-footer">
          <span>LET'S WORK TOGETHER</span>
          <h2>
            Have a project
            <br />
            in mind?
          </h2>
          <p>Let's turn your ideas into amazing web experiences.</p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Talk →
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ARSHIYA.ZARNEGAR</p>
        <p>CODE / DESIGN / INNOVATION</p>
      </div>
    </footer>
  );
}

export default Footer;
