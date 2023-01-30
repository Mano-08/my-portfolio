import React, { useEffect, useState } from "react";
import classes from "./HomePage.module.scss";

function HomePage() {
  return (
    <div id="landingPage" className={classes.landingPageContainer}>
      <section className={classes.aboutMeContainer}>
        <div className={classes.myNameContainer}>Hi Iam Mano</div>
        <div className={classes.balloonsContainer}>Balloons Section</div>
      </section>
      <section className={classes.grass}></section>
      <section className={classes.ground}></section>
    </div>
  );
}

export default HomePage;
