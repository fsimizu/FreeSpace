import { PracticePlayerContainer } from "../components/PracticePlayerContainer/index.jsx";
import { Navbar } from '../components/Navbar';
import { ScrollToTop } from '../utils/functions';
import { Analytics } from "@vercel/analytics/react"

export function Practice() {

  return (
    <>
      <div style={{ position: "relative" }}>
        <ScrollToTop />
        <Navbar />
        <Analytics />
        <br />
        <br />
        <PracticePlayerContainer videoId={'xF3HedZy1yc'}/>


      </div>

    </>
  );
}
