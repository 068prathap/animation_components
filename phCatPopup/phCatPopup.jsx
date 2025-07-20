import Image from "next/image";
import styles from "./phCatPopup.module.css";
import cat from "@/../public/images/phCatPopup/cat.webp";

export default function PhCatPopup() {
  return (
    <>
      <div className={`${styles.phCatPopup} d-flex align-items-start`}>
        <Image className={styles.catImg} src={cat} alt="cat img" />
        <div className={`${styles.phCatPopupBox} d-flex flex-column`}>
          <p className={styles.phCatPopupBoxDesc}>
            SchedX Is Live on Product Hunt
          </p>
          <a
            className={styles.phCatPopupBoxBtnWrap}
            href="https://www.producthunt.com/posts/schedx?utm_source=schedx"
            target="_blank"
          >
            <button
              className={`${styles.phCatPopupBoxBtn} d-flex align-items-center justify-content-center`}
            >
              <p className={styles.phCatPopupBoxBtnText}>Support us</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <path
                  d="M5 2L9 6L5 10"
                  stroke="#FA573A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
