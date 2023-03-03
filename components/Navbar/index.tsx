import Link from "next/link";
import React, { useState, useEffect } from "react";
import RegisterBtn from "../buttons/Register";
import Cover from "../Cover";
import TelidocLogoSvg from "../SVGs/telidocLogoSvg";
import styles from "./styles.module.css";
import { slide as Menu } from "react-burger-menu";
const Navbar = ({ back }: { back: any }) => {
  var styless = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "36px",
      background: "url(/Assets/Images/Extend.svg)",
    },
    bmBurgerBars: {
      background: "none",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      height: "100%",
      right: "0px",
      top: "96px",
    },
    bmMenu: {
      background: "#fff",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#fff",
      padding: "0.8em",
      width: "60%",
    },
    bmOverlay: {
      top: "96px",
    },
  };
  const [width, setWidth] = useState(991);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log(width);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  return (
    <div className={back === "true" ? styles.white : ""}>
      <Cover>
        <div className={styles.mainNav}>
          <Link href="/">
            <div>
              <TelidocLogoSvg />
            </div>
          </Link>
          {width > 990 ? (
            <div className={styles.navLinks}>
              <Link href="#">Pricing</Link>
              <Link href="#joinArea">Doctors</Link>
              <Link href="#">Pharmacies</Link>
              <Link href="#">Help</Link>
              <Link href="Auth">
                <div className={styles.loginDiv}>
                  <p>LOG IN</p>
                </div>
              </Link>
              <RegisterBtn />
            </div>
          ) : (
            <Menu width={300} styles={styless}>
              <div className={styles.navLinks}>
                <Link href="#">Pricing</Link>
                <Link href="#joinArea">Doctors</Link>
                <Link href="#">Pharmacies</Link>
                <Link href="#">Help</Link>
                <Link href="Auth">
                  <div className={styles.loginDiv}>
                    <p>LOG IN</p>
                  </div>
                </Link>
                <RegisterBtn />
              </div>
            </Menu>
          )}
        </div>
      </Cover>
    </div>
  );
};

export default Navbar;
