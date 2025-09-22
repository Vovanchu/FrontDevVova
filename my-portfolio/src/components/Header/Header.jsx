import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Header.scss";

function Header({
  title = "My Portfolio",
  links = [
    { name: "About Me", href: "about-me" },
    { name: "Skills", href: "skills" },
    { name: "Education", href: "education" },
    { name: "Projects", href: "projects" },
  ],
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <h1>
        <a href="#" className="header-link">
          {title}
        </a>
      </h1>

      <button
        className={`header-burger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="header-burger-line header-burger-top"></span>
        <span className="header-burger-line header-burger-middle"></span>
        <span className="header-burger-line header-burger-bottom"></span>
      </button>

      <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
        <ul className="header-nav-list">
          {links.map((link) => (
            <li className="header-nav-list-item" key={link.name}>
              <a
                href={link.href}
                className="header-nav-list-item-link"
                onClick={() => setMenuOpen(false)} // закриваємо меню по кліку
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

export default Header;
