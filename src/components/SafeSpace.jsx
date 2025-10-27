import bg from "../img/Bg.svg"
import "../style/SafeSpace.css"
import phone from "../img/phone.svg"

function SafeSpace() {
  return (
    <div className="safe-container">
      <div className="safe-wrapper">
        <div className="experience">
          <img src={bg} alt="" className="bg-img" />

          <div className="safe-text">
            <div>
              <h2>12+</h2>
              <p>Years of Experience</p>
            </div>
            <div>
              <h2>150K+</h2>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h2>35+</h2>
              <p>Warehouse</p>
            </div>
          </div>
        </div>
      </div>
      <div className="safe-about-us">
        <p className="safe-about-p">About Us</p>
        <h2 className="safe-h2-text">Providing a Safe Space For <span>Your Treasured Items</span></h2>
        <p className="safe-p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error pariatur ut totam, ipsam <span>distinctio
            dolorem, eius possimus, doloremque exercitationem tempora consectetur</span><span> repudiandae beatae. Ab ad eligendi harum. Sed,
            placeat.</span></p>
        <div className="mission-vision">
          <div className="vision">
              <h2>Vision</h2>
              <p>sed ut perspiciatis unde omnis iste <span>natus error sit volupatem accusan</span><span>fium doloremque laudnatium.</span></p>
          </div>
          <div className="mission">
              <h2>Mission</h2>
              <p>sed ut perspiciatis unde omnis iste <span>natus error sit volupatem accusan</span><span>fium doloremque laudnatium.</span></p>
          </div>
        </div>
        <div className="more-info">
          <div className="button">
            <p>Discover More</p>
          </div>
          <div className="more-info-img">
            <img src={phone} alt="" />
            <div className="text-more-info">
                <h5>More Information</h5>
                <h6>+46 8 123 122 44</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SafeSpace