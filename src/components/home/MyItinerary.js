import React, { useEffect, useState, useRef } from "react"
import ItineraryDialog from "./ItineraryDialog"
import useModal from "../../hooks/ui/useModal"


const MyItinerary = props => {
    // Create a state variable for itinerary items - useState()
    const [itineraryList, setItineraryList] = useState([])
    const { toggleDialog, modalIsOpen } = useModal("#dialog--itinerary")
    const [currentItinerary, setCurrentItinerary] = useState({})

    const getItems = () => {
        // Fetch the data from localhost:8000/itineraryitems
        fetch("http://localhost:8000/itineraryitems", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
            }
        })
            // Convert to JSON
            .then(response => response.json())

            // Store itinerary items in state variable
            .then((allTheItems) => {
                setItineraryList(allTheItems)
            })
    }

    // Create useEffect()
    useEffect(() => {
        getItems()

        const handler = e => {
            if (e.keyCode === 27) {
                console.log(`MyItinerary useEffect() modalIsOpen = ${modalIsOpen}`)
                if (modalIsOpen) {
                    toggleDialog(false)
                }
            }
        }

        window.addEventListener("keyup", handler)

        return () => window.removeEventListener("keyup", handler)
    }, [])

    const updateItineraryItem = (starttime) => {
        fetch(`http://localhost:8000/itineraryitems/${currentItinerary.id}`, {
            "method": "PUT",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
            },
            "body": JSON.stringify({
                "starttime": starttime
            })
        })
            .then(() => {
                console.log("Updated!!!! YAY!!!!  🙌🏼")
                toggleDialog(false)
            })
            .then(getItems)
    }


    // Create HTML representation with JSX
    return (
        <>
            <ItineraryDialog toggleDialog={toggleDialog} callback={(starttime)=> {
                updateItineraryItem(starttime)
            }} />
            <h2>What I Want to Do on Saturday</h2>

            <ul>
                {
                    itineraryList.map((item) => {
                        return <li>
                            {item.attraction.name} in {item.attraction.area.name} at {item.starttime}
                            <button onClick={() => {
                                setCurrentItinerary(item)
                                toggleDialog(true)
                            }}>Edit Me</button>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default MyItinerary