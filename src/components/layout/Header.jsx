import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">🛰️ Rui Universe 🪐</Link>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav__menu">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/study">Study</Link>
            </li>

            <li>
              <Link to="/daily">Daily</Link>
            </li>

            <li>
              <Link to="/travel">Travel</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

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