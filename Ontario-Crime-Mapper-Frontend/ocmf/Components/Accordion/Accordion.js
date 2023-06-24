import { useState } from "react";
import styles from '../Map_Section/MapSection.module.css'
export default function Accordion({ title, description }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion} onClick={() => setIsActive(!isActive)}>
      <div className={styles.accordionTitle}>
        {title} <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className={styles.accordionDescrip}>
          {description}
        </div>
      )}
    </div>
  );
}
