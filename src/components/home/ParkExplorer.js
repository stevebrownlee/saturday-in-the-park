import React, { useEffect, useState } from "react"
import AreaList from "./AreaList"
import "./Explorer.css"
import Attractions from "./Attractions"

const ParkExplorer = props => {
    const [areas, setAreas] = useState([])
    const [attractions, setAttractions] = useState([])

    const getAttractions = (areaId) => {
        fetch(`http://localhost:8000/attractions?area=${areaId}`)
            .then(response => response.json())
            .then(attractions => {
                console.log(attractions)
            })
    }

    useEffect(() => {
        console.log("******  ParkExplorer ComponentDidMount  ******")
        fetch('http://localhost:8000/parkareas')
            .then(response => response.json())
            .then(setAreas)
    }, [])

    return (
        <>
            <main className="explorer">
                <AreaList areas={areas} getAttractions={getAttractions} />
                <Attractions attractions={attractions} />
            </main>
        </>
    )
}

export default ParkExplorer