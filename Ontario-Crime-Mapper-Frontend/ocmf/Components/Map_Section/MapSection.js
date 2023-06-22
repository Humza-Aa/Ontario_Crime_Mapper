import styles from "./MapSection.module.css";
import Image from "next/image";

export default function MapSection() {
  return (
    <>
      <div className={styles.MapSection}>
        <div className={styles.Title}>
          <h1>Explore Crime Incidents on the Interactive Map</h1>
        </div>
        <div className={styles.Info}>
          <div>
            <div>
              <h3>Interactive Map</h3>
            </div>
            <div>
              Discover the crime landscape in your area with our interactive
              map. Navigate through incidents, view details, and gain valuable
              insights.
            </div>
          </div>
          <div className={styles.imageDiv}>
            <Image
              src="/MyMap.png"
              fill={true}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  );
}
