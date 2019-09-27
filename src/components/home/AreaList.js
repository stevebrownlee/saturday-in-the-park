import React from "react"
import Area from "./Area"
import "./AreaList.css"

const AreaList = props => {

    return (
        <>
            <article className="areaList">
                {
                    props.areas.map(area => <Area key={area.id} area={area} />)
                }
            </article>
        </>
    )
}

export default AreaList
