import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import Download from "../../images/icons/download.svg";

function Header({
  title = "My Portfolio",
  links = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
}) {
  return (
    <header className="header">
      <h1>
        <a href="#" className="header-link">
          {title}
        </a>
      </h1>

      <nav className="header-nav">
        <ul className="header-nav-list">
          {links.map((link) => (
            <li className="header-nav-list-item" key={link.name}>
              <a href={link.href} className="header-nav-list-item-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href="/CV_VolodymyrNechai_FullStackDeveloper.pdf"
        download
        className="header-dowload-button"
      >
        <img
          src={Download}
          alt="Download icon"
          className="header-dowload-button-icon"
        />
        Download Resume
      </a>
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
