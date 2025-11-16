import FAQ from "../components/FAQ";
import Header from "../components/Header"
import Booking from "../components/Booking"
import ChooseUs from "../components/ChooseUs"
import Subscribe from "../components/Subscribe"
import "../style/services.css"

function Services(){
return(
    <>
    <Header/>
    <div className="booking-container">
        <div className="text-booking">
            <h1>Booking</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <span> ullamcorper mattis, pulvinar dapibus leo.</span></p>
        </div>
    </div>
    <Booking/>
    <ChooseUs/>
    <FAQ/>
    <Subscribe/>
    </>
)
}
export default Services;