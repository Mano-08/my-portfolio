import React, { useState } from "react";
import classes from "./HomePage.module.scss";
import Tree from "./tree/Tree";
import sun from "./sun.svg";
import Image from "next/image";
import moon from "./moon.svg";

function HomePage() {
  const [isDark, setDark] = useState(false);
  return (
    <div
      className={classes.homePage}
      id="home"
      style={{ background: isDark ? "rgb(4, 24, 61)" : "rgb(85, 228, 228)" }}
    >
      <section className={classes.sky}>
        <div className={classes.dot} />
        <div className={classes.sun}>
          <Image
            src={moon}
            className={isDark ? classes.slideIn : classes.slideOut}
            onClick={() => {
              isDark ? setDark(false) : setDark(true);
            }}
            alt="moon"
          />

          <Image
            src={sun}
            className={isDark ? classes.slideOut : classes.slideIn}
            onClick={() => {
              isDark ? setDark(false) : setDark(true);
            }}
            alt="sun"
          />
        </div>
        <div className={classes.scenery}>
          <p
            className={classes.about}
            style={{ color: isDark ? "whitesmoke" : "grey" }}
          >
            <span style={{ color: isDark ? "skyblue" : "black" }}>
              Hi, I`m MANO
            </span>
            <br />A computer science student who loves building cool stuff on
            web. Luring my creativity into desigining applications that users
            love.
          </p>
          <section className={classes.trees}>
            <Tree
              htrunk="10vh"
              wtrunk="3vw"
              shadetrunk={isDark ? "maroon" : "rgb(90, 42, 42)"}
              hleaf="47vh"
              wleaf="16vw"
              shadeleaf={isDark ? "darkgreen" : "rgb(57, 202, 77)"}
              right="15%"
              index="3"
            />
            <Tree
              htrunk="15vh"
              wtrunk="3.5vw"
              shadetrunk={isDark ? "maroon" : "rgb(90, 42, 42)"}
              hleaf="52vh"
              wleaf="16vw"
              shadeleaf={isDark ? "darkgreen" : "rgb(44, 158, 59)"}
              right="2%"
              index="2"
            />
          </section>
        </div>
      </section>

      <section
        className={classes.ground}
        style={{ backgroundColor: isDark ? "rgb(43, 3, 3)" : "rgb(84, 21, 2)" }}
      />
    </div>
  );
}

export default HomePage;
