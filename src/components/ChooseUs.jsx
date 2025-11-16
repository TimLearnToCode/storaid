import "../style/chooseus.css";
import choose1 from "../img/choosefirst.svg";
import choose2 from "../img/choose2nd.svg";
import choose3 from "../img/choose3rd.svg";
import choose4 from "../img/choose4th.svg";
import background from "../img/background-gray.svg";

function ChooseUs() {
  return (
    <div className="choose-us-container">
      <div className="choose-us-left">
        <p className="section-label">Why Choose Us</p>
        <h3 className="section-title">
          Choose Us for Exceptional <span>Storage Solutions</span>
        </h3>
        <div className="choose-items">
          <div className="choose-item">
            <img src={choose1} alt="" />
            <div>
              <h5>Security and Safety</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus,<span> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
              </p>
            </div>
          </div>
          <div className="choose-item">
            <img src={choose2} alt="" />
            <div>
              <h5>Flexible and Affordable</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus,<span> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span></p>
            </div>
          </div>
          <div className="choose-item">
            <img src={choose3} alt="" />
            <div>
              <h5>Clean and Well-Maintained Facilities</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus,<span> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span></p>
            </div>
          </div>
          <div className="choose-item">
            <img src={choose4} alt="" />
            <div>
              <h5>24/7 and Convenient Access</h5>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus,<span> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="choose-us-right">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
        <img src={background} alt="" className="background-img" />
      </div>
    </div>
  );
}

export default ChooseUs;
