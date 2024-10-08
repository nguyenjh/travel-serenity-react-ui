import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./reserve.css"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../hooks/useFetch"
import { useContext, useState } from "react"
import { SearchContext } from "../../context/SearchContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Reserve = ({setOpen, hotelId}) => {
    const [selectedRooms, setSelectedRooms] = useState([])
    const {data, loading, error} = useFetch(`/hotels/room/${hotelId}`)
    const {dates, selected, dispatch} = useContext(SearchContext)

    const getDatesInRange = (startDate,endDate)=>{
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime())
        let list = []

        while (date <= end) {
            list.push(new Date(date).getTime())
            date.setDate(date.getDate()+1)
        }
        return list
    }
    const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate)

    const isAvailable = (roomNumber)=>{
        const isFound = roomNumber.unavailableDates.some(date=>allDates.includes(new Date(date).getTime()))
        return !isFound
    }

    const handleRoomSelection = (updatedSelectedRoomIds) => {
        const updatedSelectedRooms = data
            // Flatten the array of room numbers
            .flatMap(room => room.roomNumbers)
            .filter(roomNumber => updatedSelectedRoomIds.includes(roomNumber._id))
            .map(roomNumber => {
                const room = data.find(item => item.roomNumbers.some(rn => rn._id === roomNumber._id));
                return {
                    _id: room._id,
                    number: roomNumber.number,
                    title: room.title,
                    desc: room.desc,
                    price: room.price,
                    days: allDates.length-1
                };
            });
        dispatch({ type: "SET_SELECTED_ROOMS", payload: updatedSelectedRooms });
    };

    const handleSelect = (e)=>{
        // checks if it has been selected or not
        const checked = e.target.checked
        // value is room's id
        const value = e.target.value
        // if room is selected, add to array of prev selectedRooms
        // if room not selected, filter out that room
        const updatedSelectedRoomIds = checked
            ? [...selectedRooms, value]
            : selectedRooms.filter((item) => item !== value)

        setSelectedRooms(updatedSelectedRoomIds)
        handleRoomSelection(updatedSelectedRoomIds)
    }

    const navigate = useNavigate()

    const handleClick = async ()=>{
        try {
            await Promise.all(selectedRooms.map(roomId=>{
                const res = axios.put(`/rooms/availability/${roomId}`,{dates:allDates})
                return res.data
            }))
            setOpen(false)
            navigate(`/hotels/${hotelId}/payment`)
        } catch(err) {}
    }

    return (
        <div className="reserve">
            <div className="reContainer">
                <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)}/>
                <span>Select your rooms:</span>
                {data.map(item=>(
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">Max people: <b>{item.maxPeople}</b></div>
                            <div className="rPrice">Price: {item.price}</div>
                        </div>
                        <div className="rSelectRooms">
                            {item.roomNumbers.map(roomNumber=>(
                                <div className="room">
                                    <label>{roomNumber.number}</label>
                                    <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)}/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className="rBtn">Reserve Now!</button>
            </div>
        </div>
    )
}

export default Reserve