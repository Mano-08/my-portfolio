import React from "react";
import classes from "./Navbar.module.scss";
import github from "./icons/github.svg";
import Image from "next/image";
import linkedin from "./icons/linkedin.svg";
import mail from "./icons/mail.svg";
import twitter from "./icons/twitter.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <a className={classes.navLogo} href="#home">
        MANO
      </a>
      <ul className={classes.navLinks}>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/Mano-08">
            <Image alt="github" src={github} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/wmano"
          >
            <Image alt="linkedin" src={linkedin} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="mailto:mano.26q@gmail.com">
            <Image alt="mail" src={mail} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/mano__08"
          >
            <Image alt="twitter" src={twitter} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
