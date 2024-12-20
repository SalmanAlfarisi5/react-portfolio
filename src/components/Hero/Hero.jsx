import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Salman</h1>
        <p className={styles.description}>
          A second-year NUS student pursuing a double major in Data Science & Analytics and Computer Science, 
          with a minor in Quantitative Finance. Passionate about A.I. and machine learning.
        </p>
        <a 
        href="https://drive.google.com/file/d/15_sVqyXYRlaABZVGRO8-rTIKaKR5P_pu/view?usp=sharing" 
        className={styles.contactBtn}
        target="_blank"
        rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
