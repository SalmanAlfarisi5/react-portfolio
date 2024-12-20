import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/AI.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Engineer</h3>
              <p>
                Experienced in designing and fine-tuning cutting-edge deep learning models for maximum performance and efficiency.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Scientist</h3>
              <p>
                Skilled in uncovering insights through data analysis and delivering accurate forecasts to drive informed decision-making.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
              Proficient Full-Stack Developer with expertise in building seamless, end-to-end web applications by integrating responsive frontends with robust backend architectures.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
