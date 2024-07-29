import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./savings.css"
import { faHotel, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons"

const Savings = () => {
    return (
        // <div className="savings">
        //     <div className="savingsContainer">
        //         <div className="savingsOfferContainer">
        //             <div className="SOText">Fly away to your dream vacation</div>
        //             <div className="SOSubtitle">Get inspired - compare and book flights with flexibility</div>
        //             <button className="SOBtn">Search for flights</button>
        //         </div>
        //         <div className="savingsOfferContainer">
        //             <div className="SOText">Seize the moment!</div>
        //             <div className="SOSubtitle">Save 15% or more when you book and stay before October 1, 2024</div>
        //             <button className="SOBtn">Find Getaway Deals</button>
        //         </div>
        //     </div>
        // </div>
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