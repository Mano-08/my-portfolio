import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
