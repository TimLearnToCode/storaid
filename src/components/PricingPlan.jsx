import "../style/pricing.css"
import ok from "../img/green-ok.svg"
import okYellow from "../img/yellow-ok.svg"

function Pricing(){
    return(
        <div className="price-container">
            <div className="pricing-text">
                <h4 className="pricing-h4">Pricing Plan</h4>
                <h3 className="pricing-h3">Find The perfect Plan for <span>Your Storage Needs</span></h3>
            </div>
            <div className="unit-container">
                <div className="small-unit">
                    <h5 className="title">Small Unit</h5>
                    <div className="price">
                        <div className="currency">$</div>
                        <div className="amount">50</div>
                        <div className="month"><h6>/month</h6></div>
                    </div>
                    <div className="text-pricing">
                        <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                    </div>
                    <hr />
                   <ul className="pricing-list">
                        <li><img src={ok} alt="" className="list-icon" /> Nam nec ipsum in dolor</li>
                        <li><img src={ok} alt="" className="list-icon" /> Fusce nec ligula ut arcu</li>
                        <li><img src={ok} alt="" className="list-icon" /> Aliquam pulvinar arcu in</li>
                        <li><img src={ok} alt="" className="list-icon" /> Duis gravida enim porta</li>
                        <li><img src={ok} alt="" className="list-icon" /> Etiam eget libero non ligula</li>
                    </ul>
                    <div className="pricing-button">
                        <button className="pricing-rent">Rent Now</button>
                    </div>
                </div>
                <div className="medium-unit"> 
                    <h5 className="title-white">Medium Unit</h5>
                    <div className="price">
                        <div className="currency">$</div>
                        <div className="amount">100</div>
                        <div className="month-white"><h6>/month</h6></div>
                    </div>
                    <div className="text-pricing-white">
                        <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                    </div>
                    <hr className="hr-white"/>
                   <ul className="pricing-list-white">
                        <li><img src={okYellow} alt="" className="list-icon" /> Nam nec ipsum in dolor</li>
                        <li><img src={okYellow} alt="" className="list-icon" /> Fusce nec ligula ut arcu</li>
                        <li><img src={okYellow} alt="" className="list-icon" /> Aliquam pulvinar arcu in</li>
                        <li><img src={okYellow} alt="" className="list-icon" /> Duis gravida enim porta</li>
                        <li><img src={okYellow} alt="" className="list-icon" /> Etiam eget libero non ligula</li>
                    </ul>
                    <div className="pricing-button">
                        <button className="pricing-rent">Rent Now</button>
                    </div></div>
                <div className="large-unit">
                    <h5 className="title">Large unit</h5>
                    <div className="price">
                        <div className="currency">$</div>
                        <div className="amount">150</div>
                        <div className="month"><h6>/month</h6></div>
                    </div>
                    <div className="text-pricing">
                        <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                    </div>
                    <hr />
                   <ul className="pricing-list">
                        <li><img src={ok} alt="" className="list-icon" /> Nam nec ipsum in dolor</li>
                        <li><img src={ok} alt="" className="list-icon" /> Fusce nec ligula ut arcu</li>
                        <li><img src={ok} alt="" className="list-icon" /> Aliquam pulvinar arcu in</li>
                        <li><img src={ok} alt="" className="list-icon" /> Duis gravida enim porta</li>
                        <li><img src={ok} alt="" className="list-icon" /> Etiam eget libero non ligula</li>
                    </ul>
                    <div className="pricing-button">
                        <button className="pricing-rent">Rent Now</button>
                    </div>
                </div>
                <div className="executive-unit">                    
                    <h5 className="title">Executive Unit</h5>
                    <div className="price">
                        <div className="currency">$</div>
                        <div className="amount">200</div>
                        <div className="month"><h6>/month</h6></div>
                    </div>
                    <div className="text-pricing">
                        <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                    </div>
                    <hr />
                   <ul className="pricing-list">
                        <li><img src={ok} alt="" className="list-icon" /> Nam nec ipsum in dolor</li>
                        <li><img src={ok} alt="" className="list-icon" /> Fusce nec ligula ut arcu</li>
                        <li><img src={ok} alt="" className="list-icon" /> Aliquam pulvinar arcu in</li>
                        <li><img src={ok} alt="" className="list-icon" /> Duis gravida enim porta</li>
                        <li><img src={ok} alt="" className="list-icon" /> Etiam eget libero non ligula</li>
                    </ul>
                    <div className="pricing-button">
                        <button className="pricing-rent">Rent Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Pricing