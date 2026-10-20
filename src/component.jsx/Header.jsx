import { useEffect, useState } from "react";
import "../component.css/Header.css";
import { TELEGRAM_URL } from "../socials.js";
import { useTheme } from "./ThemeContext.jsx";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <a className="barand" href="#Home" onClick={closeMenu}>
        <span id="name">ARSHIYA.ZARNEGAR</span>
        <span id="work">FRONT-END.DEVELOPER</span>
      </a>

      <nav className={`nav${menuOpen ? " nav--open" : ""}`} aria-label="Primary">
        <a href="#Home" onClick={closeMenu}>
          Home
        </a>
        <a href="#About" onClick={closeMenu}>
          About
        </a>
        <a href="#Skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#Projects" onClick={closeMenu}>
          Projects
        </a>
        <a
          className="nav-talk-mobile"
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Let's Talk →
        </a>
      </nav>

      <div className="header-action">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "light" ? "Switch to dark theme" : "Switch to light theme"
          }
          title={theme === "light" ? "Dark mode" : "Light mode"}
        >
          {theme === "light" ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M12 3a1 1 0 0 1 1 1v1.06a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1m0 14a1 1 0 0 1 1 1v1.06a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1m9-5a1 1 0 0 1-1 1h-1.06a1 1 0 1 1 0-2H20a1 1 0 0 1 1 1M5 12a1 1 0 0 1-1 1H2.94a1 1 0 1 1 0-2H4a1 1 0 0 1 1 1m13.66-6.66a1 1 0 0 1 0 1.41l-.75.75a1 1 0 1 1-1.41-1.41l.75-.75a1 1 0 0 1 1.41 0M7.5 16.5a1 1 0 0 1 0 1.41l-.75.75a1 1 0 0 1-1.41-1.41l.75-.75a1 1 0 0 1 1.41 0m9.16 1.41a1 1 0 0 1-1.41 0l-.75-.75a1 1 0 0 1 1.41-1.41l.75.75a1 1 0 0 1 0 1.41M7.5 6.09a1 1 0 0 1-1.41 0l-.75-.75A1 1 0 0 1 6.75 3.93l.75.75a1 1 0 0 1 0 1.41M12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M12.1 2.05a1 1 0 0 1 .98 1.22 7.5 7.5 0 1 0 7.65 7.65 1 1 0 0 1 1.22.98A9.5 9.5 0 1 1 12.1 2.05"
              />
            </svg>
          )}
        </button>

        <a
          id="talk-btn"
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Talk →
        </a>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
