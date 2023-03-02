import Image from "next/image";
import React from "react";
import Cover from "../../components/Cover";
import Layout from "../../components/layout";
import Avatr from "../../components/SVGs/avatr";
import Stethoscope from "../../components/SVGs/stethoscope";
import styles from "./styles.module.css";
const Login = () => {
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
              width={613}
              height={408}
              alt="phsicians"
            />
          </div>
        </Cover>
      </div>
    </Layout>
  );
};

export default Login;
