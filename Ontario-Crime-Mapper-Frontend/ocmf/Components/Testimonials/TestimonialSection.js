import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./TestimonialSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Thanks to this app, I feel more informed and aware of the crime incidents in my neighborhood. It's user-friendly and provides detailed information about each incident. Highly recommended!",
      author: "Sarah J, App User",
    },
    {
      quote:
        "I love how easy it is to navigate through the map and explore crime incidents. The custom markers make it simple to identify the types of crimes happening around me. This app has become an essential tool for staying safe!",
      author: "Mark T, App User",
    },
    {
      quote:
        "Reporting a crime through this app is a breeze. The interface is intuitive, and the option to include photos and descriptions helps law enforcement respond effectively. I'm glad to be part of a community that actively contributes to maintaining safety.",
      author: "Emily L, App User",
    },
    {
      quote:
        "The community chat feature is fantastic! I've connected with my neighbors, shared safety tips, and organized neighborhood watch initiatives. It's empowering to work together towards a safer environment.",
      author: "John D, App User",
    },
    {
      quote:
        "This app has revolutionized how I stay informed about crime incidents. The heatmap overlay is particularly useful for identifying areas with higher crime density. Kudos to the developers for creating such a valuable tool!",
      author: "Lisa M, App User",
    },
  ];

  return (
    <>
      <div className={styles.TestimonialDiv}>
        <div className={styles.sectionTitle}>
          <h1>What Our Users Say</h1>
        </div>
        <div className={styles.testWrapper}>
          {testimonials.map((review, key) => {
            return (
              <div key={key} className={styles.testiDiv}>
                <div className={styles.userquote}>{review.quote}</div>
                <div className={styles.arrowDown}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faCaretDown}
                    size="2xl"
                  />
                </div>
                <div className={styles.userImageDiv}>
                  <div className={styles.userImage}></div>
                </div>
                <div className={styles.name}>{review.author}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
