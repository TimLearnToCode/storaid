import "../style/heroBooking.css";
import { Link } from "react-router-dom";

function HeroBooking() {
  return (
    <div className="hero-booking">
      <div className="hero-booking-content">
        <h1> Looking for Secure and Flexible Storage? <br />Find Your Perfect Fit With Us.</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestienisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisl non sodales augue. Phasellus eget elit gravida.</p>
        
        <Link to="/booking"><button className="hero-booking-btn">Book Now</button></Link>
      </div>
    </div>
  );
}

export default HeroBooking;