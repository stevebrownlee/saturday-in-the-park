import React, { useEffect, useState } from "react"
import AreaList from "./AreaList"
import "./Explorer.css"
import Attractions from "./Attractions"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const ParkExplorer = props => {
    const [areas, setAreas] = useState(['1'])
    const [attractions, setAttractions] = useState([])
    const { isAuthenticated } = useSimpleAuth()

    const getAttractions = (areaId) => {
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/attractions?area=${areaId}`, {
                "method": "GET",
                "headers": {
                    "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
                }
            })
                .then(response => response.json())
                .then(setAttractions)

        }
    }

    useEffect(() => {
        if (isAuthenticated()) {
            fetch('http://localhost:8000/parkareas', {
                "method": "GET",
                "headers": {
                    "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
                }
            })
                .then(response => response.json())
                .then(setAreas)
        }
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