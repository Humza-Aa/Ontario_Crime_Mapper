import Header from "../Components/Header/Header";
import OpeningSection from "../Components/Opening_Sections/OpeningSection";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV == "production") disableReactDevTools();

export default function Home() {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <OpeningSection />
    </div>
  );
}
