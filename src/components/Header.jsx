import contactIcon from '../img/contact-header.svg';
import contactPhone from '../img/phone-header.svg';
import iconFacebook from '../img/facebook.svg';
import iconTwitter from '../img/twitter.svg';
import iconInstagram from '../img/instagram.svg';
import iconYoutube from '../img/youtube.svg';
import logo from '../img/Logo.svg';
import '../style/header.css'
function Header(){
    return(
        <>
        <header>
            <div className="container-header">
                <div className="contact-header">
                    <div className="mail-header">
                        <img src={contactPhone} alt="" /> +46 8 123 122 44 
                    </div>
                    <div className="phone">
                        <img src={contactIcon} alt="" /> contact@domain.com
                    </div>
                    
                </div>
                <div className="socials">
                    <div className="facebook">
                        <a href="http://wwww.facebook.com" target='_blank'><img src={iconFacebook} alt="" /></a>
                    </div>
                    <div className="twitter">
                       <a href="https://www.x.com" target="_blank"> <img src={iconTwitter} alt="" /></a>
                    </div>
                    <div className="instagram">
                       <a href="https://www.instagram.com/" target="_blank"> <img src={iconInstagram} alt=""  /></a>
                    </div>
                    <div className="youtube">
                       <a href="https://www.youtube.com" target='_blank'><img src={iconYoutube} alt="" /></a>
                    </div>
            
                </div>
            </div>
        </header>
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="button-navbar">
                <p>Get Started</p>
            </div>
        </nav>
        </>
    )
}

export default Header;