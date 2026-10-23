import TopSlider from "./component/top-slider";
import Highlights from "./component/highlights";
import About from "./component/about";
import Contact from "./component/contact";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <TopSlider />
      <Highlights />
      <About />
      <Contact />
    </>
  );
}
