import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Cover from "../../components/Cover";
import Layout from "../../components/layout";
import Avatr from "../../components/SVGs/avatr";
import Stethoscope from "../../components/SVGs/stethoscope";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
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
  const router = useRouter().query.index;
  const [regLog, setRegLog] = useState("register");
  return (
    <Layout back="true">
      {router === "Register" ? (
        <>
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
                    <Link href="/Register/SignUp">
                      <div className={styles.signBtn}>
                        <p>SIGN UP AS A PATIENT</p>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <div>
                      <Stethoscope />
                    </div>
                    <h2>Doctor</h2>
                    <p className={styles.talk}>Would you like to join us?</p>
                    <Link href="/Register/SignUp">
                      <div className={styles.signBtn}>
                        <p>SIGN UP AS A DOCTOR</p>
                      </div>
                    </Link>
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
          <div className={styles.register}></div>
          <div className={styles.login}></div>
        </>
      ) : (
        <>
          <div className={styles.regBg}>
            <Cover>
              <div className={styles.register}>
                <h1>Login</h1>
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
                    <Link href="/Register/Login">
                      <div className={styles.signBtn}>
                        <p>LOG IN AS PATIENT</p>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <div>
                      <Stethoscope />
                    </div>
                    <h2>Doctor</h2>
                    <p className={styles.talk}>Would you like to join us?</p>
                    <Link href="/Register/Login">
                      <div className={styles.signBtn}>
                        <p>LOG IN AS DOCTOR</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Cover>
          </div>
          <div className={styles.phys}>
            <Cover>
              <div className={styles.physiciams}>
                <Image
                  src="/Assets/Images/loginImmages.png"
                  //300
                  width={width > 990 ? 613 : 300}
                  //200
                  height={width > 990 ? 408 : 200}
                  alt="phsicians"
                />
              </div>
            </Cover>
          </div>
          <div className={styles.register}></div>
          <div className={styles.login}></div>
        </>
      )}
    </Layout>
  );
};

export default Login;
