import React, { useEffect, useState } from "react"
import AreaList from "./AreaList"
import "./Explorer.css"

const ParkExplorer = props => {
    const [areas, setAreas] = useState([])

    useEffect(() => {
        console.log("******  ParkExplorer ComponentDidMount  ******")
        fetch('http://localhost:8000/parkareas')
            .then(response => response.json())
            .then(setAreas)
    }, [])

    return (
        <>
            <main className="explorer">
                <AreaList areas={areas} />
                <AreaList areas={areas} />

            </main>
        </>
    )
}

export default ParkExplorer