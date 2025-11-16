import Header from "../components/Header";
import Welcome from "../components/Welcome";
import SafeSpace from "../components/SafeSpace";
import Logos from "../components/logos";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import ChooseUs from "../components/ChooseUs";
import Pricing from "../components/PricingPlan";
import Flexible from "../components/FlexibleStorage";
import Blog from "../components/Blog";
import Subscribe from "../components/Subscribe";

function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <SafeSpace />
      <Logos />
      <OurServices />
      <Testimonials />
      <ChooseUs />
      <Pricing />
      <Flexible />
      <Blog />
      <Subscribe />
    </>
  );
}

export default Home;