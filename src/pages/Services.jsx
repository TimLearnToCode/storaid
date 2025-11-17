import "../style/services.css"
import Header from "../components/Header"
import FAQ from "../components/FAQ"
import Subscribe from "../components/Subscribe"
import Testimonials from "../components/Testimonials"
import OurServices from "../components/OurServices"
import HeroBooking from "../components/HeroBooking"


function Services(){
    return(
        <>
         <Header/>
        <div className="container-services">
            <div className="text-services">
                <h1>Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <span> ullamcorper mattis, pulvinar dapibus leo.</span></p>
            </div>
        </div>
        <OurServices/>
        <Testimonials/>
        <FAQ/>
        <HeroBooking/>
        <Subscribe/>
        </>
    )
}

export default Services