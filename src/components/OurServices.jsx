import "../style/ourservices.css"
import our from "../img/ourservices.svg"

function OurServices(){
    return(
    <>
        <div className="services-container">
            <div className="services-subtitle">
                <p>Our Services</p>
            </div>
            <div className="services-header">
                <h3 className="services-title">Specialized Storage for <span>Every Special Item</span></h3>
                <p className="services-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui
                <span> lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue.</span>
                Phasellus eget elit gravida.
                </p>
            </div>
            <div className="services-grid">
                <div className="service-card">
                    <h4>Diverse Unit Sizes</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur <span> adipiscing elit. Ut elit tellus, luctus nec </span>ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>

                <div className="service-card">
                    <h4>Moving Assistance</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur <span> adipiscing elit. Ut elit tellus, luctus nec </span>ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>

                <div className="service-image">
                    <img src={our} alt="Storage illustration" />
                </div>

                <div className="service-card">
                    <h4>Vehicle Storage</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur <span> adipiscing elit. Ut elit tellus, luctus nec </span>ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>

                <div className="service-card">
                    <h4>Top-Notch Security</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur <span> adipiscing elit. Ut elit tellus, luctus nec </span>ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default OurServices;