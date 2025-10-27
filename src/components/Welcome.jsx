import imgGuy from "../img/guy.svg";
import '../style/welcome.css'


function Welcome(){
    return(
    <>
        <div className="container">
            <div className="text">
                <h4>Welcome to StorAid</h4>
                <h1><span>Space Simplified,</span><span>Storage Perfected</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi error aut <span> voluptatem rem architecto tempore! Magni veritatis temporibus enim accusamus nam quod unde?</span>
                <span> Rem sit voluptatem distinctio error totam aliquid eius dolore aliquam, ex, eum sunt.</span>
                </p>
                <div className="button">
                    <p>Discover More</p>
                </div>
            </div>
            <div className="pic">
                <img src={imgGuy} alt="" />
            </div>
        </div>
    </>
)
}
export default Welcome;