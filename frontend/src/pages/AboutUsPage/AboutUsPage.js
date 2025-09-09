import React from 'react';
import styles from './AboutUsPage.module.scss';

function AboutUsPage() {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.section1}>
        <div className={styles.textCtn}>
          <p className={styles.header}>We believe we can all make a difference.</p>
          <p className={styles.text}>Our way: Exceptional quality. Ethical factories. Radical Transparency.</p>
        </div>
      </div>

      <div className={styles.section2}>
        <div className={styles.textCtn}>
          <p className={styles.text}>At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.</p>
        </div>
      </div>

      <div className={styles.section3}>
        <div className={styles.leftCtn}></div>
        <div className={styles.rightCtn}>
          <div className={styles.textCtn}>
            <p className={styles.subHeader}>OUR FACTORIES</p>
            <p className={styles.header}>Our ethical approach.</p>
            <p className={styles.text}>We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
