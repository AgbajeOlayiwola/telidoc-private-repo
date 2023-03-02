import Link from "next/link";
import React from "react";
import RegisterBtn from "../buttons/Register";
import Cover from "../Cover";
import TelidocLogoSvg from "../SVGs/telidocLogoSvg";
import styles from "./styles.module.css";
const Navbar = ({ back }: { back: any }) => {
  return (
    <div className={back === "true" ? styles.white : ""}>
      <Cover>
        <div className={styles.mainNav}>
          <Link href="/">
            <div>
              <TelidocLogoSvg />
            </div>
          </Link>
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
        </div>
      </Cover>
    </div>
  );
};

export default Navbar;
