"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./profitSectionScroll.module.css";

export default function ProfitSectionScroll({ profitSectionCardList }) {
  const [activeCard, setAtiveCard] = useState(0);
  const [maxScroll, setMaxScroll] = useState(3);
  const profitSectionScroll = useRef();

  useEffect(() => {
    if(window.innerWidth<=768){
      setMaxScroll(4);
    }
    if(window.innerWidth<=450){
      setMaxScroll(5);
    }
    profitSectionScroll.current.style.transform = `translateX(calc(3.6% + ${
      -10.33 * activeCard
    }% - ${activeCard * 1.688}rem))`;
  }, [activeCard]);

  return (
    <>
      <div className={styles.profitSectionScrollOuterWrap}>
        <div
          onClick={() => {
            setAtiveCard(activeCard - 1);
          }}
          className={`${activeCard === 0 ? styles.inactive : ""} ${
            styles.profitSectionScrollLeftArrow
          } ${
            styles.profitSectionScrollArrow
          } d-flex justify-content-center align-items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
          >
            <path
              d="M0.551025 6.20699L6.19963 11.8556C6.31105 11.967 6.44332 12.0554 6.58889 12.1157C6.73447 12.176 6.89049 12.207 7.04806 12.207C7.20563 12.207 7.36166 12.176 7.50723 12.1157C7.6528 12.0554 7.78508 11.967 7.89649 11.8556C8.00791 11.7442 8.09629 11.6119 8.15659 11.4663C8.21689 11.3208 8.24792 11.1647 8.24792 11.0072C8.24792 10.8496 8.21689 10.6936 8.15659 10.548C8.09629 10.4024 8.00791 10.2702 7.89649 10.1587L5.14479 7.40704L14.2483 7.40704C14.5666 7.40704 14.8718 7.2806 15.0969 7.05555C15.3219 6.8305 15.4484 6.52526 15.4484 6.20699C15.4484 5.88872 15.3219 5.58349 15.0969 5.35843C14.8718 5.13338 14.5666 5.00695 14.2483 5.00695L5.14479 5.00695L7.89649 2.25525C8.00832 2.14406 8.09706 2.01186 8.15762 1.86626C8.21817 1.72065 8.24935 1.56451 8.24935 1.40682C8.24935 1.24912 8.21817 1.09298 8.15762 0.947379C8.09706 0.801774 8.00832 0.669574 7.89649 0.558386C7.67145 0.333414 7.36627 0.207031 7.04806 0.207031C6.72985 0.207031 6.42467 0.333414 6.19963 0.558387L0.551025 6.20699Z"
              fill="#6C7D93"
            />
          </svg>
        </div>
        <div
          onClick={() => {
            setAtiveCard(activeCard + 1);
          }}
          className={`${activeCard === maxScroll ? styles.inactive : ""} ${
            styles.profitSectionScrollRigthArrow
          } ${
            styles.profitSectionScrollArrow
          } d-flex justify-content-center align-items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
          >
            <path
              d="M0.551025 6.20699L6.19963 11.8556C6.31105 11.967 6.44332 12.0554 6.58889 12.1157C6.73447 12.176 6.89049 12.207 7.04806 12.207C7.20563 12.207 7.36166 12.176 7.50723 12.1157C7.6528 12.0554 7.78508 11.967 7.89649 11.8556C8.00791 11.7442 8.09629 11.6119 8.15659 11.4663C8.21689 11.3208 8.24792 11.1647 8.24792 11.0072C8.24792 10.8496 8.21689 10.6936 8.15659 10.548C8.09629 10.4024 8.00791 10.2702 7.89649 10.1587L5.14479 7.40704L14.2483 7.40704C14.5666 7.40704 14.8718 7.2806 15.0969 7.05555C15.3219 6.8305 15.4484 6.52526 15.4484 6.20699C15.4484 5.88872 15.3219 5.58349 15.0969 5.35843C14.8718 5.13338 14.5666 5.00695 14.2483 5.00695L5.14479 5.00695L7.89649 2.25525C8.00832 2.14406 8.09706 2.01186 8.15762 1.86626C8.21817 1.72065 8.24935 1.56451 8.24935 1.40682C8.24935 1.24912 8.21817 1.09298 8.15762 0.947379C8.09706 0.801774 8.00832 0.669574 7.89649 0.558386C7.67145 0.333414 7.36627 0.207031 7.04806 0.207031C6.72985 0.207031 6.42467 0.333414 6.19963 0.558387L0.551025 6.20699Z"
              fill="#6C7D93"
            />
          </svg>
        </div>
        <div className={styles.profitSectionScrollWrap}>
          <div
            ref={profitSectionScroll}
            className={`${styles.profitSectionScroll} d-flex`}
          >
            {profitSectionCardList.map((card, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.profitSectionCard} d-flex flex-column justify-content-between`}
                >
                  <p className={styles.profitSectionCardHeading}>
                    {card.heading}
                  </p>
                  <div className="d-flex justify-content-center">
                    <img
                      style={card.imgStyles}
                      className={styles.profitSectionCardImg}
                      src={card.img}
                      alt="img"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
