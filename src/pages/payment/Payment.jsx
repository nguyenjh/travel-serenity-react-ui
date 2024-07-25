import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCcDiscover, faCcMastercard, faCcStripe, faCcVisa } from "@fortawesome/free-brands-svg-icons"
import Navbar from "../../components/navbar/Navbar"
import "./payment.css"
import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"
import { useNavigate } from "react-router-dom"

const Payment = () => {
    const { selected } = useContext(SearchContext)

    const calculateTotalCost = () => {
        return selected.reduce((total, room) => total + room.price * room.days, 0)
    }

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate("/")
    }

    return (
        <div>
            <Navbar />
            <div className="payment">
                <div className="pContainer">
                    <span className="pTitle">Payment</span>
                    <div className="pRoomDetails">
                        <h3>Selected Rooms</h3>
                        <ul>
                            {selected.map((room, index) => (
                                <li key={index}>
                                    <u>{room.title}</u> <b>[{room.number}]</b>: {room.desc} - <b>${room.price} x {room.days} days</b>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr></hr>
                    <div className="pTotalContainer">
                        <span className="pTotalText">Total</span>
                        <b className="pTotal">${calculateTotalCost()}</b>
                    </div>
                    <div className="pNameContainer">
                        <div className="pName">Card Holder Name</div>
                        <input type="text" className="pNameInput" />
                    </div>
                    <div className="pCardContainer">
                        <div className="pCardTitleAndIcons">
                            <div className="pCard">Card Number</div>
                            <div className="pCardIcons">
                                <FontAwesomeIcon icon={faCcVisa} />
                                <FontAwesomeIcon icon={faCcMastercard} />
                                <FontAwesomeIcon icon={faCcDiscover} />
                                <FontAwesomeIcon icon={faCcStripe} />
                            </div>
                        </div>
                        <input type="number" placeholder="0000 0000 0000 0000" className="pCardInput" />
                    </div>
                    <div className="pExpireAndSecCodeContainer">
                        <div className="pExpireContainer">
                            <div className="pExpire">Expiry Date</div>
                            <input type="text" placeholder="MM/YY" className="pExpireInput" />
                        </div>
                        <div className="pSecCodeContainer">
                            <div className="pSecCode">CVV</div>
                            <input type="number" placeholder="000" className="pSecCodeInput" />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="pBtn">SUBMIT</button>
                </div>
            </div>
        </div>

    )
}

export default Payment