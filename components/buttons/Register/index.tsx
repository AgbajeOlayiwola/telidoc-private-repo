import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const RegisterBtn = () => {
  return (
    <Link href="/Auth/Register">
      <div className={styles.registerDiv}>
        <p>REGISTER</p>
      </div>
    </Link>
  );
};

export default RegisterBtn;
