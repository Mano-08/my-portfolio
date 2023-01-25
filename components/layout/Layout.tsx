import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import classes from "./Layout.module.scss";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <div className={classes.layout}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
