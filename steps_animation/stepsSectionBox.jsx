"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./stepsSectionBox.module.css";

export default function StepsSectionBox({ stepsSectionContentList }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepsSectionBoxStepLine = useRef([]);
  const stepsSectionBoxStepWrap = useRef([]);

  useEffect(() => {
    let activeIndex = -1,
      myInterval,
      isStarted = false;

    const isMobile = window.innerWidth <= 768;

    function intervalFunction() {
      myInterval = setInterval(() => {
        lineChanging();
      }, 4000);
    }

    function lineChanging() {
      if (activeIndex === 3) {
        activeIndex = 0;
        setActiveIndex(0);
      } else {
        activeIndex += 1;
        setActiveIndex(activeIndex);
      }

      if (activeIndex === 0) {
        stepsSectionBoxStepLine.current.forEach((line) => {
          line.classList.remove(styles.animatedLine);
        });
      }

      if (activeIndex < 3) {
        stepsSectionBoxStepLine.current[activeIndex].classList.remove(
          styles.animatedLine
        );
        setTimeout(() => {
          stepsSectionBoxStepLine.current[activeIndex].classList.add(
            styles.animatedLine
          );
        }, 250);
      }
    }

    if(!isMobile) {
      window.addEventListener("scroll", () => {
        scrollCheck();
      });
    }

    stepsSectionBoxStepWrap.current.forEach((step, index) => {
      let top;
      if (isMobile) {
        top = step.offsetTop;
      } else {
        top = step.offsetTop + step.offsetHeight / 2;
      }
      if (index < stepsSectionBoxStepWrap.current.length - 1) {
        stepsSectionBoxStepLine.current[index].parentElement.style.top =
          top + "px";
      }
      if (index > 0) {
        let previousTop;
        if (isMobile) {
          previousTop = stepsSectionBoxStepWrap.current[index - 1].offsetTop;
        } else {
          previousTop =
            stepsSectionBoxStepWrap.current[index - 1].offsetTop +
            stepsSectionBoxStepWrap.current[index - 1].offsetHeight / 2;
        }
        stepsSectionBoxStepLine.current[index - 1].parentElement.style.height =
          top - previousTop + "px";
      }
    });

    function scrollCheck() {
      const top =
        stepsSectionBoxStepLine.current[0].getBoundingClientRect().top +
        stepsSectionBoxStepLine.current[0].getBoundingClientRect().height / 2;

      if (top <= window.innerHeight && !isStarted) {
        lineChanging();
        intervalFunction();
        isStarted = true;
      }
    }
    if(!isMobile) {
      scrollCheck();
    }

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <>
      <div className={`${styles.stepsSectionBoxStepsLeft}`}>
        <div
          className={`${styles.stepsSectionBoxStepsList} d-flex flex-column`}
        >
          <div className={`${styles.stepsSectionBoxStepLine}`}>
            <div
              className={styles.stepsSectionBoxStepAniLine}
              ref={(el) => (stepsSectionBoxStepLine.current[0] = el)}
            ></div>
          </div>
          <div className={`${styles.stepsSectionBoxStepLine}`}>
            <div
              className={styles.stepsSectionBoxStepAniLine}
              ref={(el) => (stepsSectionBoxStepLine.current[1] = el)}
            ></div>
          </div>
          <div className={`${styles.stepsSectionBoxStepLine}`}>
            <div
              className={styles.stepsSectionBoxStepAniLine}
              ref={(el) => (stepsSectionBoxStepLine.current[2] = el)}
            ></div>
          </div>
          {stepsSectionContentList.map((box, index) => {
            let newClass;
            if (index === activeIndex) {
              newClass = "active";
            } else if (index < activeIndex) {
              newClass = "previous";
            }
            return (
              <div
                ref={(el) => (stepsSectionBoxStepWrap.current[index] = el)}
                key={index}
                className={`${styles.stepsSectionBoxStepWrap} d-flex align-items-center`}
              >
                <div
                  className={`${styles.stepsSectionBoxStepCount} ${styles[newClass]} d-flex justify-content-center align-items-center`}
                >
                  <h6 className={styles.stepsSectionBoxStepCountText}>
                    step {index + 1}
                  </h6>
                </div>
                <div
                  className={`${styles.stepsSectionBoxStepHeadWrap} ${
                    index <= activeIndex ? styles.active : ""
                  }`}
                >
                  <p className={`${styles.stepsSectionBoxStepHeading}`}>
                    {box.stepName}
                  </p>
                  <img
                    style={box.imgStyles}
                    className={styles.stepsSectionBoxStepsInnerImg}
                    src={box.img}
                    alt="voxmo"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${styles.stepsSectionBoxStepsRight} d-flex align-items-center justify-content-center`}
      >
        {stepsSectionContentList.map((box, index) => {
          return (
            <div
              key={index}
              className={`${styles.stepsSectionBoxStepsImgWrap} ${
                index === activeIndex ? "d-block" : "d-none"
              }`}
            >
              <img
                style={box.imgStyles}
                className={styles.stepsSectionBoxStepsImg}
                src={box.img}
                alt="voxmo"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
