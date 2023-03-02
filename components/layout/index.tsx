import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children, back }: { children: any; back: any }) => {
  return (
    <>
      <Navbar back={back} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
