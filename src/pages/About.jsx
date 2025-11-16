import Header from "../components/Header";
import SafeSpace from "../components/SafeSpace";
import Logos from "../components/logos";
import Testimonials from "../components/Testimonials";
import ChooseUs from "../components/ChooseUs";
import Subscribe from "../components/Subscribe";
import "../style/about.css"

function About() {
  return (
    <>
        <Header/>
        <div className="about-container">
            <div className="text-about">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <span> ullamcorper mattis, pulvinar dapibus leo.</span></p>
            </div>
        </div>
        <SafeSpace/>
        <Logos />
        <Testimonials />
        <ChooseUs />
        <Subscribe />
       
        

    </>
  );
}

export default About;