"use client";

import { useEffect, useState } from "react";
import styles from "./featureSection.module.css";

export default function FeatureSection({
  featureSectionContentList,
  featureSectionTabList,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsmobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsmobile(true);
    }
  }, []);

  return (
    <>
      <div className={styles.featureSection}>
        <div className={`${styles.featureSectionTabList} d-flex`}>
          {featureSectionTabList.map((tab, index) => {
            return (
              <div
                key={index}
                className={`${styles.featureSectionTabWrap} ${
                  index === activeIndex ? styles.active : ""
                } d-flex justify-content-center align-items-center`}
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                <p className={styles.featureSectionTab}>{tab}</p>
              </div>
            );
          })}
        </div>
        <div className={`${styles.featureSectionBoxWrap}`}>
          {featureSectionContentList.map((content, index) => {
            return (
              <div
                key={index}
                className={`${styles.featureSectionBox} ${
                  index === activeIndex || isMobile ? "d-flex" : "d-none"
                }`}
              >
                <div className={styles.featureSectionBoxLeft}>
                  <img
                    className={styles.featureSectionBoxIcon}
                    src={content.icon}
                    alt="icon"
                  />
                  <h3 className={styles.featureSectionBoxHeading}>
                    {content.heading}
                  </h3>
                  <p className={styles.featureSectionBoxDesc}>{content.desc}</p>
                </div>
                <div
                  className={`${styles.featureSectionBoxRight} d-flex justify-content-center`}
                >
                  <div>
                    <img
                      style={content.imgStyles}
                      className={styles.featureSectionBoxImg}
                      src={content.img}
                      alt={content.heading}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
