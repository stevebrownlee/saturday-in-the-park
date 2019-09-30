import React from "react"
import Attraction from "./Attraction"
import "./Attractions.css"

const Attractions = props => {
    return (
        <>
            <article className="explorerList">
                {
                    props.attractions.map(ride =>
                        <Attraction key={ride.id} ride={ride} {...props} />)
                }
            </article>
        </>
    )
}

export default Attractions
