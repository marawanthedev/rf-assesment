import React from "react";

// styling  dependecies
import styles from "styles/template.module.css";

export default function Template(props): JSX.Element {
  return (
    <div className={styles.template}>
      <div className={styles.navbarContainer}></div>
      {props.children}
      <div className={styles.footerContainer}></div>
    </div>
  );
}
