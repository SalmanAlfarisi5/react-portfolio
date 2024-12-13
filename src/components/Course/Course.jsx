import React from "react";

import styles from "./Course.module.css";
import courses from "../../data/courses.json";

export const Course = () => {
  return (
    <section className={styles.container} id="course">
      <h2 className={styles.title}>Relevant Courses</h2>
      <div className={styles.content}>
      <ul className={styles.courses}>
          {courses.map((course, id) => {
            return (
              <li key={id} className={styles.course}>
                <a
                  href={`https://nusmods.com/courses/${course.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.courseLink}
                >
                  <div className={styles.courseItemDetails}>
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};