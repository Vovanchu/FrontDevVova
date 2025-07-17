import React from "react";

import "./Footer.scss";

import CV from "../../CV_VolodymyrNechai_FullStackDeveloper.pdf";

import {
  FaTelegramPlane,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaFileAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Володимир Нечай. Всі права захищено.</p>
      <div className="footer-icons">
        <a
          href="mailto:nechayvova2005@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://t.me/your_daaddy"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://www.instagram.com/vova_wg/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/Vovanchu"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/вова-нечай-7a1293312/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a href={CV} target="_blank" rel="noopener noreferrer" aria-label="CV">
          <FaFileAlt />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
