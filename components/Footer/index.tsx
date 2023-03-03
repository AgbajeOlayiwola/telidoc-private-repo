import React, { useState, useEffect } from "react";
import Cover from "../Cover";
import TelidocLogoSvg from "../SVGs/telidocLogoSvg";
import styles from "./styles.module.css";
import { BsFacebook } from "react-icons/bs";
import FacebookSvg from "../SVGs/facebookSvg";
import TwitterSvg from "../SVGs/twitterSvg";
import InstagrammSvg from "../SVGs/instagrammSvg";
import { useRouter } from "next/router";

const Footer = () => {
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
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/Register" ? (
        <Cover>
          <div className={styles.footermain}>
            <div className={styles.footermainI}>
              <div>
                <TelidocLogoSvg />
              </div>
              <div>
                <p>
                  “Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit{" "}
                </p>
              </div>
              <div>
                <div className={styles.innerSocials}>
                  <FacebookSvg />
                  <TwitterSvg />
                  <InstagrammSvg />
                </div>
              </div>
            </div>
            {width >= 990 ? (
              <>
                <div className={styles.footermainII}>
                  <h2>Menu</h2>
                  <p>Home</p>
                  <p>Doctors</p>
                  <p>Pharmmacies</p>
                  <p>Help</p>
                </div>
                <div className={styles.footermainIII}>
                  <h2>Our Services</h2>
                  <p>Consult a doctor</p>
                  <p>Order medicine</p>
                </div>
                <div className={styles.footermainIV}>
                  <h2>Our policies</h2>
                  <p>Privacy policy</p>
                  <p>Terms and Conditions</p>
                  <p>Return policy</p>
                </div>
              </>
            ) : (
              <div className={styles.footerMobile}>
                <div className={styles.footermainII}>
                  <h2>Menu</h2>
                  <p>Home</p>
                  <p>Doctors</p>
                  <p>Pharmmacies</p>
                  <p>Help</p>
                </div>
                <div className={styles.footermainIII}>
                  <h2>Our Services</h2>
                  <p>Consult a doctor</p>
                  <p>Order medicine</p>
                </div>
                <div className={styles.footermainIV}>
                  <h2>Our policies</h2>
                  <p>Privacy policy</p>
                  <p>Terms and Conditions</p>
                  <p>Return policy</p>
                </div>
              </div>
            )}
          </div>
          <div className={styles.finalFooter}>
            <p>Copyright c 2021, Telidoc. All rights reserved.</p>
          </div>
        </Cover>
      ) : null}
    </>
  );
};

export default Footer;
