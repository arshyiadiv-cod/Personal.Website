import "../component.css/Header.css";

function Header() {
  return (
    <header className="header">
      {/* BRAND */}
      <div className="barand">
        <h1 id="name">ARSHIYA.ZARNEGAR</h1>

        <p id="work">FRONT-END.DEVELOPER</p>
      </div>

      {/* NAVIGATION */}
      <nav className="nav">
        <a href="#Home">Home</a>

        <a href="#About">About</a>

        <a href="#Skills">Skills</a>

        <a href="#Projects">Projects</a>
      </nav>

      {/* TALK BUTTON */}
      <div className="header-action">
        <button id="talk-btn">Let's Talk →</button>
      </div>
    </header>
  );
}

export default Header;
