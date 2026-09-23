import "../component.css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="brand-footer">
          <h2>ARSHIYA.ZARNEGAR</h2>

          <p>FRONT-END.DEVELOPER</p>

          <span>
            I build modern, responsive and user-friendly web experiences.
          </span>
        </div>

        {/* LINKS */}
        <div className="link-footer">
          <h3>Quick Links</h3>

          <a href="#Home">Home →</a>
          <a href="#About">About →</a>
          <a href="#Skills">Skills →</a>
          <a href="#Projects">Projects →</a>
        </div>

        {/* CONTACT */}
        <div className="contact-footer">
          <h3>Contact</h3>

          <p>✉ arshyiadiv@gmail.com</p>
          <p>⌖ IRAN, TEHRAN</p>
          <p>☎ +98 9395913600</p>
          <p>☎ +98 9905349231</p>
        </div>

        {/* CTA */}
        <div className="cta-footer">
          <span>LET'S WORK TOGETHER</span>

          <h2>
            Have a project
            <br />
            in mind?
          </h2>

          <p>Let's turn your ideas into amazing web experiences.</p>

          <a href="#contact">Let's Talk →</a>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 ARSHIYA.ZARNEGAR</p>

        <p>CODE / DESIGN / INNOVATION</p>
      </div>
    </footer>
  );
}

export default Footer;
