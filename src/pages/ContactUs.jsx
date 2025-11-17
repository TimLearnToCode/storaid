import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import GetInTouch from "../components/GetInTouch";
import FAQ from "../components/FAQ";
import "../style/contactUs.css"
import FindUs from "../components/FindUs"


function ContactUs(){
    return(
        <>
        <Header/>
        <div className="contactus-container">
            <div className="text-contactus">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
                <span>ullamcorper mattis, pulvinar dapibus leo.</span></p>
            </div>
        </div>
        <GetInTouch/>
        <FindUs/>
        <FAQ/>
        <Subscribe/>
        </>
    );
}

export default ContactUs;