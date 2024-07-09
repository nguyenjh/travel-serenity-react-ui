import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/34405073.webp?k=fec9d1956d8581db5bb623e7e3b3f9129c2e230b21ec428b542a242347526db0&o=" alt="Sugar Loft Apartments Img" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Sugar Loft Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOpt">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² • 1 full bed
                </ span>
                <span className="siCancelOpt">Free cancellation</span>
                <span className="siCancelOptSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOpt">Includes taxes and fees</span>
                    <button className="siCheckBtn">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem