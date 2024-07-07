import "./featuredProperties.css"

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="Aparthotel Stare Miasto Img" className="fpImg" />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Kraków, Poland</span>
                <span className="fpPrice">Starting from $176</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Exellent</span>
                </div>
            </div>
            
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" alt="Cheval Three Quays at The Tower of London Img" className="fpImg" />
                <span className="fpName">Cheval Three Quays at The Tower of London</span>
                <span className="fpCity">London, United Kingdom</span>
                <span className="fpPrice">Starting from $692</span>
                <div className="fpRating">
                    <button>9.4</button>
                    <span>Wonderful</span>
                </div>
            </div>

            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87429281.webp?k=6ba4f0190557519bcfef96a626037f73bef992019e568abde2a3d5b892bf7577&o=" alt="7Seasons Apartments Budapest Img" className="fpImg" />
                <span className="fpName">7Seasons Apartments Budapest</span>
                <span className="fpCity">Budapest, Hungary</span>
                <span className="fpPrice">Starting from $143</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/564164054.webp?k=4af0c1162a89e574f3e72972e984c3919aa6689556d25be78861a947237df255&o=" alt="NĒRO Suites by NOMÉE Hospitality Group Img" className="fpImg" />
                <span className="fpName">NĒRO Suites by NOMÉE Hospitality Group</span>
                <span className="fpCity">Imerovigli, Greece</span>
                <span className="fpPrice">Starting from $1,238</span>
                <div className="fpRating">
                    <button>9.6</button>
                    <span>Exceptional</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties