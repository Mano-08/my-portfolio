import React from "react";
import classes from "./Navbar.module.scss";
import github from "./icons/github.svg";
import Image from "next/image";
import linkedin from "./icons/linkedin.svg";
import mail from "./icons/mail.svg";
import twitter from "./icons/twitter.svg";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <section className={classes.name}>
        <p>Mano</p>
      </section>
      <section className={classes.nav_links}>
        <Image height={40} width={40} alt="github" src={github} />
        <Image height={40} width={40} alt="twitter" src={twitter} />
        <Image height={40} width={40} alt="linkedin" src={linkedin} />
        <Image height={40} width={40} alt="mail" src={mail} />
      </section>
    </nav>
  );
}

export default Navbar;
