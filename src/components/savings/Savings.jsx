import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./savings.css"
import { faHotel, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons"

const Savings = () => {
    return (
        <div class="savings">
            <div className="savingsContainer">
                <div className="savingsItem">
                    <div className="savingsContents">
                        <div className="savingsTextandBtn">
                            <div class="savingsText">
                                <h1>Fly away to your dream vacation</h1>
                                <p>Get inspired – compare and book flights with flexibility</p>
                            </div>
                            <a class="savingsBtn">Search for Flights</a>
                        </div>
                        <div class="savingsImg">
                            <FontAwesomeIcon icon={faPlaneDeparture} />
                        </div>
                    </div>
                </div>
                <div className="savingsItem">
                    <div className="savingsContents">
                            <div className="savingsTextandBtn">
                                <div class="savingsText">
                                    <h1>Seize the moment!</h1>
                                    <p>Save 15% or more when you book and stay before October 1, 2024</p>
                                </div>
                                <a class="savingsBtn">Find Getaway Deals</a>
                            </div>
                            <div class="savingsImg">
                                <FontAwesomeIcon icon={faHotel} />
                            </div>
                        </div>
                </div>
            </div>
    </div>
    )
}

export default Savings