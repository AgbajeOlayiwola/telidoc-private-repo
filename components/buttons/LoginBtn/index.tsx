import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const LoginBtn = () => {
  return (
    <Link href="/Auth/Login">
      <div className={styles.loginDiv}>
        <p>LOG IN</p>
      </div>
    </Link>
  );
};

export default LoginBtn;
