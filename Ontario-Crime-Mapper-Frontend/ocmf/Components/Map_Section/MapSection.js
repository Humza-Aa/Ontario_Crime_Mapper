import Accordion from "../Accordion/Accordion";
import styles from "./MapSection.module.css";

export default function MapSection() {
  const mapSection = [
    {
      title: "Interactive Map",
      description:
        "Get a bird's eye view of crime incidents with our user-friendly, interactive map. Visualize crime data, customize the display, and explore different areas.",
      image: "/MyMap.png",
      alternate: "Picture of My Map",
    },
    {
      title: "Marker Legend",
      description:
        "Understand crime categories easily with our marker legend. Identify different types of crimes through distinct icons and labels.",
      image: "/MyMap.png",
      alternate: "Picture of My Map",
    },
    {
      title: "Crime Details Popup",
      description:
        "Dive deeper into each crime incident. Click on a marker to reveal detailed information such as crime type, date, time, and location.",
      image: "/MarkerOpen.png",
      alternate: "Picture of My Map",
    },
    {
      title: "Community Chat",
      description:
        "Connect with your community. Engage in discussions, share safety tips, and collaborate to create a safer neighborhood.",
      image: "/MyMap.png",
      alternate: "Picture of My Map",
    },
    {
      title: "Report a Crime",
      description:
        "Take an active role in crime prevention. Easily report suspicious activities or incidents to help maintain community safety.",
      image: "/MyMap.png",
      alternate: "Picture of My Map",
    },
    {
      title: "Additional Controls or Features",
      description:
        "Enhance your experience with additional features. Explore street views, cluster markers, and access personalized crime data.",
      image: "/MyMap.png",
      alternate: "Picture of My Map",
    },
    {
      title: "Sign Up and Start Exploring",
      description:
        "Take the first step to a safer community. Sign up now and start exploring crime incidents in your area.",
      image: "/MyMap.png",
      alternate: "Picture of My Map",
    },
  ];

  return (
    <>
      <div className={styles.MapSection}>
        <div className={styles.Title}>
          <h1>Explore Crime Incidents on the Interactive Map</h1>
          <p>
            Discover the crime landscape in your area with our interactive map.
            Navigate through incidents, view details, and gain valuable
            insights.
          </p>
        </div>

        <div className={styles.AccordionDic}>
          {mapSection.map((info, key) => {
            return (
              <Accordion title={info.title} description={info.description} />

              /*<div className={styles.Info} key={key}>
              <div className={styles.MapInfo}>
                <div>
                  <h3>{info.title}</h3>
                </div>
                <div>{info.description}</div>
              </div>
              <div className={styles.imageDiv}>
                <img src={info.image} alt={info.alternate} />
              </div>
            </div>*/
            );
          })}
        </div>
      </div>
    </>
  );
}
