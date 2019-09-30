import React, { useState, useEffect, useRef } from "react"

const Attraction = props => {
    let dialog = null
    const starttime = useRef(null)
    const [modalIsOpen, setIsOpen] = useState(false)

    const toggleDialog = () => {
        setIsOpen(!modalIsOpen)

        if (modalIsOpen) {
            dialog.removeAttribute("open")
        } else {
            dialog.setAttribute("open", true)
            starttime.current.focus()
        }
    }

    const addToItinerary = () => {
        fetch('http://localhost:8000/itineraries', {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
            },
            "body": JSON.stringify({
                "attraction_id": props.ride.id,
                "starttime": starttime.current.value
            })
        })
            .then(response => response.json())
            .then(() => {
                toggleDialog()
            })
    }

    useEffect(() => {
        dialog = document.querySelector("#dialog--time")

        const handler = e => {
            // Close all dialogs when ESC is pressed, and close search field
            if (e.keyCode === 27) {
                if (modalIsOpen) {
                    toggleDialog()
                }
            }
        }

        window.addEventListener("keyup", handler)
        return () => window.removeEventListener("keyup", handler)
    })


    return (
        <>
            <dialog id="dialog--time" className="dialog--time">
                <main className="dialog__main">
                    <label htmlFor="starttime">
                        <p>When do you want to visit this attraction?</p>
                        <p>Use 0900 for 9 a.m. or 1530 for 3:30 p.m.</p>
                    </label>
                    <input ref={starttime} type="number" name="starttime" required />

                    <button onClick={addToItinerary}>Add to Itinerary</button>

                    <button style={{
                        position: "absolute",
                        top: "0.25em",
                        right: "0.25em"
                    }}
                        id="closeBtn"
                        onClick={toggleDialog}>X</button>
                </main>
            </dialog>

            <section className="ride">
                <button className="fakeLink ride__link"
                    onClick={toggleDialog}>
                    {props.ride.name}
                </button>
            </section>
        </>
    )
}

export default Attraction
