import React from "react";
import "./footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <a href="https://uy.linkedin.com/in/nicol%C3%A1s-rodriguez-530aa5227">
          <LinkedInIcon />
          <p>Linkedin</p>
        </a>
        <a href="https://github.com/NicorRodriguez">
          <GitHubIcon />
          <p>GitHub</p>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=nicolas@jncloud.io">
          <MailIcon />
          <p>Contact</p>
        </a>
      </div>
      <p className="footer-text">Copyright © 2023</p>
    </footer>
  );
};

export default Footer;
