import "./hotel.css"
import Navbar from "../../components/navbar/Navbar.jsx"
import Header from "../../components/header/Header.jsx"
import MailList from "../../components/mailList/MailList.jsx"
import Footer from "../../components/footer/Footer.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useContext, useState } from "react"
import useFetch from "../../hooks/useFetch.js"
import { useLocation } from "react-router-dom"
import { SearchContext } from "../../context/SearchContext.js"

const Hotel = () => {
    const location = useLocation()
    // grabs third segment in location path i.e. /hotels/6690a4a1f99e09c0718be054 so [0]/[1]/[2]
    const id = location.pathname.split("/")[2]

    const[slideNum, setSlideNum] = useState(0)
    const[open, setOpen] = useState(false)

    const {data, loading, error} = useFetch(`/hotels/find/${id}`)

    const {dates, options} = useContext(SearchContext)
    
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }

    const days = (dayDifference(dates[0].endDate, dates[0].startDate))

    const handleOpen = (i)=>{
        setSlideNum(i)
        setOpen(true)
    }

    const handleMove = (direction)=>{
        let newSlideNum

        if (direction==="l") {
            newSlideNum = slideNum === 0 ? 5 : slideNum - 1
        } else {
            newSlideNum = slideNum === 5 ? 0 : slideNum + 1
        }

        setSlideNum(newSlideNum)
    }

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            {loading ? (
                "loading"
            ) : (
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={data.photos[slideNum]} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">{data.name}</h1>
                    <div className="hotelAdress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{data.address}</span>
                    </div>
                    <span className="hotelDist">
                        Excellent location - {data.distance}m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                    </span>
                    <div className="hotelImgs">
                        {data.photos?.map((photos, i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photos} alt="Sugar Loft Apartments Img" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">{data.title}</h1>
                            <p className="hotelDesc">
                                {data.desc}
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a {days}-night stay!</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing, 
                                this property has an excellent score of 8.9!
                            </span>
                            <h2>
                                <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <div className="bottomContainer">
                    <MailList/>
                    <Footer/>
                </div>
            </div>)}
        </div>
    )
}

export default Hotel