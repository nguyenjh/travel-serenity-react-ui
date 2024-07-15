import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"
import useFetch from "../../hooks/useFetch"

const List = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)

    const {data,loading,error,reFetch} = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)

    const handleClick = ()=>{
        reFetch()
    }

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Search</h1>
                        <div className="listSearchItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="listSearchItem">
                            <label>Check-In Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>{`${format(
                                date[0].startDate, "MM/dd/yyyy")} 
                                to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </span>
                            {openDate && (
                                <DateRange
                                    onChange={item=>setDate([item.selection])} 
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="listSearchItem">
                            <label>Options</label>
                            <div className="listSearchOptions">
                                <div className="listSearchOptionItem">
                                    <span className="listSearchOptionText">
                                        Min Price <small>per night</small>
                                    </span>
                                    <input type="number" onChange={e=>setMin(e.target.value)} min={0} className="listSearchOptionInput" />
                                </div>
                                <div className="listSearchOptionItem">
                                    <span className="listSearchOptionText">
                                        Max Price <small>per night</small>
                                    </span>
                                    <input type="number" onChange={e=>setMax(e.target.value)} min={0} className="listSearchOptionInput" />
                                </div>
                                <div className="listSearchOptionItem">
                                    <span className="listSearchOptionText">
                                        Adult 
                                    </span>
                                    <input type="number" min={1} className="listSearchOptionInput" placeholder={options.adult}/>
                                </div>
                                <div className="listSearchOptionItem">
                                    <span className="listSearchOptionText">
                                        Children 
                                    </span>
                                    <input type="number" min={0} className="listSearchOptionInput" placeholder={options.children}/>
                                </div>
                                <div className="listSearchOptionItem">
                                    <span className="listSearchOptionText">
                                        Room 
                                    </span>
                                    <input type="number" min={1} className="listSearchOptionInput" placeholder={options.room}/>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="listResult">
                        {loading ? "loading" : <>
                            {data.map(item=>(
                                <SearchItem item={item} key={item._id}/>
                            ))}
                        </>}
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

export default List