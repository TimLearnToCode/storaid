import "../style/findUs.css"
import guy2 from "../img/guy2.svg"
import facebook from "../img/facebook.svg"
import twitter from "../img/twitter.svg"
import youtube from "../img/youtube.svg"
import instagram from "../img/instagram.svg"
import phone from "../img/phone2.svg"
import mail from "../img/mail.svg"
import location from "../img/location.svg"


function FindUs() {
  return (
    <div className="findus-container">
        <div className="findus-left">
            <img src={guy2} alt="" />
        </div>
        <div className="findus-center">
            <h3>Find Us On:</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="findus-item">
                <div className="findus-icon">
                    <img src={phone} alt="" />
                </div>
                <div className="findus-text">
                    <h4>Call Center</h4>
                    <p>+46 8 123 122 44</p>
                </div>
            </div>
            <div className="findus-item">
                <div className="findus-icon">
                    <img src={mail} alt="" />
                </div>
                <div className="findus-text">
                    <h4>Email Address</h4>
                    <p>contact@domain.com</p>
                </div>
            </div>
            <div className="findus-item">
                <div className="findus-icon">
                    <img src={location} alt="" />
                </div>
                <div className="findus-text">
                    <h4>Location</h4>
                    <p>Klarabergsviadukten 90, Stockholm</p>
                </div>
            </div>
            <div className="findus-social-title">
                <span>Our Social Media</span>
                <div className="line"></div>
                <div className="findus-socials">
                    <div className="social-icon"><img src={facebook} alt="" /></div>
                    <div className="social-icon"><img src={twitter} alt="" /></div>
                    <div className="social-icon"><img src={instagram} alt="" /></div>
                    <div className="social-icon"><img src={youtube} alt="" /></div>
                </div>
            </div>
        </div>
      <div className="findus-right"></div>
    </div>
  );
}

export default FindUs;