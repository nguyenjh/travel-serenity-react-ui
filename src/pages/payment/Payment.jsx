import Navbar from "../../components/navbar/Navbar"
import "./payment.css"

const Payment = () => {
    return (
        <div>
            <Navbar />
            <div className="payment">
                <div className="pContainer">
                    <span className="pTitle">Payment</span>
                    <div className="pNameContainer">
                        <div className="pName">Card Holder Name</div>
                        <input type="text" className="pNameInput" />
                    </div>
                    <div className="pCardContainer">
                        <div className="pCard">Card Number</div>
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
                    <button className="pBtn">SUBMIT</button>
                </div>
            </div>
        </div>

    )
}

export default Payment