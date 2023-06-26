import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./OpeningSection.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import dynamic from "next/dynamic";

export default function OpeningSection() {
  const App_Overview = dynamic(() => import("./App_Overview/App_Overview"), {
    ssr: false,
  });
  const MapSection = dynamic(() => import("../Map_Section/MapSection"), {
    ssr: false,
  });
  const TestimonialSection = dynamic(
    () => import("../Testimonials/TestimonialSection"),
    {
      ssr: false,
    }
    );
  const Footer = dynamic(() => import("../Footer/Footer"), {
    ssr: false,
  });

  return (
    <>
      <div className={styles.Hero}>
        <div className={styles.Blur}>
          <div className={styles.Content}>
            <div className={styles.headlineDiv}>
              <h1 className={styles.Headline}>
                Stay Informed. <br /> Empower Your Safety
              </h1>
              <div className={styles.CallToAction}>
                <p>
                  Explore crime incidents in your neighborhood with a single
                  click.
                </p>
                <Link href="/loginPage">
                  {/* <button> */}
                  Lets Get Started{" "}
                  <FontAwesomeIcon icon={faArrowRight} bounce />
                  {/* </button> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <App_Overview />
      <MapSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}
