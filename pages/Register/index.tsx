import React, { useState } from "react";
import Cover from "../../components/Cover";
import Layout from "../../components/layout";
import Facebook from "../../components/SVGs/facebook";
import G10 from "../../components/SVGs/g10";
import Googleicon from "../../components/SVGs/googleicon";
import styles from "./styles.module.css";

const Register = () => {
  const [rigisterLogin, setRegisterLogin] = useState<boolean>(true);
  return (
    <Layout back="">
      <div className={styles.register}>
        <div className={styles.registerSections}>
          <section className={styles.registerInputSection}>
            {rigisterLogin ? (
              <div>
                <div className={styles.regi}>
                  <h1>Register</h1>
                  <p>Your health matters to us. So we put you first.</p>
                </div>
                <div className={styles.signInWithFlex}>
                  <div className={styles.signInWith}>
                    <Googleicon />
                    <p>Sign up with Google</p>
                  </div>
                  <div className={styles.signInWith}>
                    <Facebook />
                    <p>Sign up with Facebook</p>
                  </div>
                </div>
                <div>
                  <div className={styles.hrSection}>
                    <hr />
                    <p>or sign up with email</p>
                    <hr />
                  </div>
                </div>
                <form>
                  <div className={styles.mainInputs}>
                    <div>
                      <label>First name</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>Last name</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>Phone number</label>
                      <input type="number" />
                    </div>
                    <div>
                      <label>Email</label>
                      <input type="email" />
                    </div>
                  </div>
                  <div className={styles.passwordInput}>
                    <label>Password</label>
                    <input type="password" />
                  </div>
                  <div className={styles.check}>
                    <input type="checkbox" />
                    <label>Yes, I want to receive Sanar emails</label>
                  </div>
                  <div className={styles.check}>
                    <input type="checkbox" />
                    <label>
                      I agree to all <span>Terms of Service,</span> and{" "}
                      <span>Privacy Policy</span>
                    </label>
                  </div>
                  <div>
                    <button className={styles.crerateAcccount}>
                      CREATE ACCOUNT
                    </button>
                  </div>
                </form>
                <div className={styles.haveanAccoujnt}>
                  <p>
                    Already have an account?
                    <span onClick={() => setRegisterLogin((prev) => !prev)}>
                      {" "}
                      Sign in
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className={styles.regi}>
                  <h1>Log In</h1>
                  <p>Enter your sign in details to continue</p>
                </div>
                <div className={styles.signInWithFlex}>
                  <div className={styles.signInWith}>
                    <Googleicon />
                    <p>Sign up with Google</p>
                  </div>
                  <div className={styles.signInWith}>
                    <Facebook />
                    <p>Sign up with Facebook</p>
                  </div>
                </div>
                <div>
                  <div className={styles.hrSection}>
                    <hr />
                    <p>or sign up with email</p>
                    <hr />
                  </div>
                </div>
                <form>
                  <div className={styles.loginpasswordInput}>
                    <label>Email</label>
                    <input type="email" />
                  </div>
                  <div className={styles.loginpasswordInputII}>
                    <label>Password</label>
                    <input type="password" />
                  </div>
                  <div className={styles.remForgot}>
                    <div className={styles.check}>
                      <input type="checkbox" />
                      <label>Remeber me</label>
                    </div>
                    <div>
                      <p>Forgot password?</p>
                    </div>
                  </div>

                  <div>
                    <button className={styles.crerateAcccount}>LOG IN</button>
                  </div>
                </form>
                <div className={styles.haveanAccoujnt}>
                  <p>
                    Already have an account?
                    <span onClick={() => setRegisterLogin((prev) => !prev)}>
                      {" "}
                      Sign in
                    </span>
                  </p>
                </div>
              </div>
            )}
          </section>
          <section className={styles.registerInfoSection}>
            <G10 />
            <div className={styles.yourHealth}>
              <h1>Your health is our priority.</h1>
              <p>
                To ensure good health: eat lightly, breathe deeply, live
                moderately, cultivate cheerfulness, and maintain an interest in
                life.
              </p>
            </div>
            <div className={styles.progress}>
              <div className={styles.progressInn}>
                <div className={styles.progressActive}></div>
                <div className={styles.progressInActive}></div>
                <div className={styles.progressInActive}></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
