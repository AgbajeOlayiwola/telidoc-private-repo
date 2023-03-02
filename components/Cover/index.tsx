import React from "react";
import styles from "./styles.module.css";

const Cover = ({ children }: { children: any }) => {
  return (
    <div className={styles.outerFlex}>
      <div className={styles.innerModule}>{children}</div>
    </div>
  );
};

export default Cover;
