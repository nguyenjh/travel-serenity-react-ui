import "./hotel.css"
import Navbar from "../../components/navbar/Navbar.jsx"
import Header from "../../components/header/Header.jsx"
import MailList from "../../components/mailList/MailList.jsx"
import Footer from "../../components/footer/Footer.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Hotel = () => {
    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34405073.jpg?k=3cd3ba4802cdd33470a32b3bebcb1884ecb11b33f0286e2fdb8b54ad8f981912&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/74529947.jpg?k=4ba88803157f6ff0afd788a52427267074302d51dd8d5759c43a569bf249c8d4&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34405116.jpg?k=140e467990a406f7e320c3eb5a051fad03333d55619c407509fe32702044c62b&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/90028655.jpg?k=6a3b18d7b176a54cb800167d4091cad421f3ab4058b47950ae5c27f35c66f594&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/111763599.jpg?k=1557deb3c87703c3e1c28134df75cd0bad54b42303d808328e8f1a4448237b63&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/74045535.jpg?k=380bcba56eb37c5731e972c26cac2b804d67c0b16f288df0c390ef748acd222a&o=&hp=1"
        }
    ]

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Sugar Loft Apartments</h1>
                    <div className="hotelAdress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Rua Dias de Barros, 11, Santa Teresa, Rio de Janeiro, CEP 20241-020, Brazil</span>
                    </div>
                    <span className="hotelDist">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $123 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImgs">
                        {photos.map(photos=>(
                            <div className="hotelImgWrapper">
                                <img src={photos.src} alt="Sugar Loft Apartments Img" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">Lorem ipsum, dolor sit amet</h1>
                            <p className="hotelDesc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quos, quidem? Excepturi vero, magnam tenetur, repellendus 
                                fugiat nesciunt sit reprehenderit, dolore ullam rerum nihil 
                                voluptatibus nobis sequi aperiam pariatur accusantium deleniti. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quos, quidem? Excepturi vero, magnam tenetur, repellendus 
                                fugiat nesciunt sit reprehenderit, dolore ullam rerum nihil 
                                voluptatibus nobis sequi aperiam pariatur accusantium deleniti. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quos, quidem? Excepturi vero, magnam tenetur, repellendus 
                                fugiat nesciunt sit reprehenderit, dolore ullam rerum nihil 
                                voluptatibus nobis sequi aperiam pariatur accusantium deleniti.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing, 
                                this property has an excellent score of 8.9!
                            </span>
                            <h2>
                                <b>$1107</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <div className="bottomContainer">
                    <MailList/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Hotel