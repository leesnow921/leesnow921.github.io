import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">

        {/* Logo */}
        <div className="logo">
          <a href="/">🛰️ Rui Universe 🪐</a>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav__menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#study">Study</a></li>
            <li><a href="#daily">Daily</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Right Buttons */}
        <div className="header__actions">
          <button
            className="icon-button"
            aria-label="Toggle language"
          >
            🌐
          </button>

          <button
            className="icon-button"
            aria-label="Toggle theme"
          >
            🌙
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;