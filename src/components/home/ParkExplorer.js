import React, { useEffect, useState } from "react"
import AreaList from "./AreaList"
import "./Explorer.css"
import Attractions from "./Attractions"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const ParkExplorer = props => {
    const [areas, setAreas] = useState([])
    const [attractions, setAttractions] = useState([])
    const { isAuthenticated } = useSimpleAuth()

    const getAttractions = (areaId) => {
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/attractions?area=${areaId}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
                }
            })
                .then(response => response.json())
                .then((allAttractions) => {
                    setAttractions(allAttractions)
                })
        }
    }

    const getParkAreas = () => {
        if (isAuthenticated()) {
            fetch('http://localhost:8000/parkareas', {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
                }
            })
                .then(response => response.json())
                .then(setAreas)
        }
    }

    useEffect(getParkAreas, [])

    return (
        <>
            <main className="explorer">
                <AreaList areas={areas} getAttractions={getAttractions} />
                <Attractions attractions={attractions} {...props} />
            </main>
        </>
    )
}

export default ParkExplorer