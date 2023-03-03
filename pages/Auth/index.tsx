import Image from "next/image";
import React, { useState, useEffect } from "react";
import Cover from "../../components/Cover";
import Layout from "../../components/layout";
import Avatr from "../../components/SVGs/avatr";
import Stethoscope from "../../components/SVGs/stethoscope";
import styles from "./styles.module.css";
const Login = () => {
  const [width, setWidth] = useState(0);

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
    <Layout back="true">
      <div className={styles.regBg}>
        <Cover>
          <div className={styles.register}>
            <h1>Register</h1>
          </div>
        </Cover>
      </div>
      <div className={styles.regBg}>
        <Cover>
          <div className={styles.signUpCen}>
            <div className={styles.signUp}>
              <div>
                <div>
                  <Avatr />
                </div>
                <h2>Patient</h2>
                <p className={styles.talk}>
                  Talk to a licensed doctor at Sanar
                </p>
                <div className={styles.signBtn}>
                  <p>SIGN UP AS A PATIENT</p>
                </div>
              </div>
              <div>
                <div>
                  <Stethoscope />
                </div>
                <h2>Doctor</h2>
                <p className={styles.talk}>Would you like to join us?</p>
                <div className={styles.signBtn}>
                  <p>SIGN UP AS A DOCTOR</p>
                </div>
              </div>
            </div>
          </div>
        </Cover>
      </div>
      <div className={styles.phys}>
        <Cover>
          <div className={styles.physiciams}>
            <Image
              src="/Assets/Images/Physicians.png"
              //300
              width={width > 990 ? 613 : 300}
              //200
              height={width > 990 ? 408 : 200}
              alt="phsicians"
            />
          </div>
        </Cover>
      </div>
    </Layout>
  );
};

export default Login;
