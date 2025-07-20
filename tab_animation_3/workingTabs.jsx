"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./workingTabs.module.css";
import { useSearchParams } from "next/navigation";

export default function WorkingTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const workingTabList = useRef();
  const workingContentList = useRef({});
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const tabs = [
    {
      icon: "/images/home/workingTabIcon1.svg",
      activeIcon: "/images/home/workingTabActiveIcon1.svg",
      text: "Questions",
    },
    {
      icon: "/images/home/workingTabIcon2.svg",
      activeIcon: "/images/home/workingTabActiveIcon2.svg",
      text: "Qualify",
    },
    {
      icon: "/images/home/workingTabIcon3.svg",
      activeIcon: "/images/home/workingTabActiveIcon3.svg",
      text: "Book",
    },
    {
      icon: "/images/home/workingTabIcon4.svg",
      activeIcon: "/images/home/workingTabActiveIcon4.svg",
      text: "Route",
    },
  ];

  const tabContent = [
    {
      heading: "SchedX Answers Questions On Your Product",
      headingStyles: {
        maxWidth: "455px",
      },
      desc: "SchedX is trained on your product, value proposition, pricing, and competitors, and answers questions like your best rep- ‘live’ on your website.",
      descStyles: {
        maxWidth: "528px",
      },
      img: "/images/home/WorkingTabContentImg1.webp",
      imgStyles: {
        maxWidth: "490px",
      },
    },
    {
      heading: "SchedX Qualifies Your Inbound Leads",
      headingStyles: {
        maxWidth: "455px",
      },
      desc: "Give SchedX your qualification criteria and fields. And watch as SchedX qualifies website visitors, fills qualification fields (think BANT, MEDDIC), and ensures only good-fit leads fill your calendar.",
      descStyles: {
        maxWidth: "582px",
      },
      img: "/images/home/WorkingTabContentImg2.webp",
      imgStyles: {
        maxWidth: "531.23px",
      },
    },
    {
      heading: "SchedX Books Meetings With Interested Leads",
      headingStyles: {
        maxWidth: "482px",
      },
      desc: "When website visitors show positive sentiment around your product, SchedX understands, discusses their availability, and books the appropriate calendar slot.",
      descStyles: {
        maxWidth: "582px",
      },
      img: "/images/home/WorkingTabContentImg3.webp",
      imgStyles: {
        maxWidth: "482.62px",
      },
    },
    {
      heading: "SchedX Routes Leads to the Right Sales Rep",
      headingStyles: {
        maxWidth: "455px",
      },
      desc: "SchedX understands your sales team hierarchy and lead routing strategy and assigns leads to the perfect sales rep every time.",
      descStyles: {
        maxWidth: "582px",
      },
      img: "/images/home/WorkingTabContentImg4.webp",
      imgStyles: {
        maxWidth: "525.53px",
      },
    },
  ];

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setActiveTab("all");
    }

    if (tab) {
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          const target =
            workingContentList.current[`feature-${tab.toLowerCase()}`];
          if (target) {
            const topPosition =
              target.getBoundingClientRect().top + window.scrollY - 50;

            window.scrollTo({
              top: topPosition,
              behavior: "smooth",
            });
          }
        }, 150);
      } else {
        const tabIndex = tabs.findIndex((t) => t.text.toLowerCase() === tab);
        if (tabIndex !== -1) {
          setActiveTab(tabIndex);
        }
      }
    }
  }, []);

  return (
    <>
      <div
        ref={workingTabList}
        className={`${styles.workingTabList} d-flex align-items-start`}
      >
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className={`${styles.workingTabOuterWrap} ${
                activeTab === index ? styles.active : ""
              }`}
            >
              <div
                className={`${styles.workingTabWrap} d-flex align-items-center justify-content-center`}
                onClick={() => setActiveTab(index)}
              >
                {activeTab === index ? (
                  <img
                    className={`${styles.workingTabIcon} ${
                      index === 0 && styles.woringTabIcon1
                    }`}
                    src={tab.activeIcon}
                    alt="icon"
                  />
                ) : (
                  <img
                    className={`${styles.workingTabIcon} ${
                      index === 0 && styles.woringTabIcon1
                    }`}
                    src={tab.icon}
                    alt="icon"
                  />
                )}
                <p className={styles.workingTab}>{tab.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`${styles.workingTabContentWrap} d-flex flex-column`}>
        {tabContent.map((content, index) => {
          return (
            <div
              ref={(el) =>
                (workingContentList.current[
                  `feature-${tabs[index].text.toLowerCase()}`
                ] = el)
              }
              key={index}
              className={`${styles.workingTabContent} ${
                activeTab === index || activeTab === "all" ? "d-flex" : "d-none"
              }`}
            >
              <div className={styles.workingTabContentLeft}>
                <p
                  style={content.headingStyles}
                  className={styles.workingTabContentHeading}
                >
                  {content.heading}
                </p>
                <p
                  style={content.descStyles}
                  className={styles.workingTabContentDesc}
                >
                  {content.desc}
                </p>
              </div>
              <div
                className={`${styles.workingTabContentRight} d-flex justify-content-center`}
              >
                <img
                  style={content.imgStyles}
                  className={styles.workingTabContentImg}
                  src={content.img}
                  alt="content.heading"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
