import "../style/logo.css"
import logo from "../img/logoipsum.svg"
import logo2 from "../img/logoipsum2.svg"
import logo3 from "../img/logoipsum3.svg"
import logo4 from "../img/logoipsum4.svg"
import logo5 from "../img/logoipsum5.svg"

function Logos(){
    return(
        <>
        <div className="logo-container">
            <img src={logo} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
        </div>

        </>
    )
}
export default Logos