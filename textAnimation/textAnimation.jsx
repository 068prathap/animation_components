"use client";

import { useEffect, useState } from "react";
import styles from "./textAnimation.module.css";

export default function TextAnimation({textList}) {
  const [activeText, setActiveText] = useState(0);

  useEffect(() => {
    let activeText = 0;
    const myInterval = setInterval(() => {
      if (activeText === textList.length - 1) {
        setActiveText(0);
        activeText = 0;
      } else {
        setActiveText(activeText + 1);
        activeText += 1;
      }
    }, 3000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <>
      <span className={`${styles.animatedTextWrap}`}>
        {textList.map((text, index) => {
          return (
            <span
              key={index}
              className={`${styles.animatedText} ${activeText === index ? styles.active : ""} textGradient`}
            >
              {text}
            </span>
          );
        })}
      </span>
    </>
  );
}
