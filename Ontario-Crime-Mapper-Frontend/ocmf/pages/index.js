import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MapSection from "../Components/Map_Section/MapSection";
import App_Overview from "../Components/Opening_Sections/App_Overview/App_Overview";
import OpeningSection from "../Components/Opening_Sections/OpeningSection";
import TestimonialSection from "../Components/Testimonials/TestimonialSection";

export default function Home() {
  return (
    <>
      <Header />
      <OpeningSection />
      <App_Overview />
      <MapSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}
