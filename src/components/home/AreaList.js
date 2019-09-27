import React from "react"
import Area from "./Area"
import "./AreaList.css"

const AreaList = props => {

    return (
        <>
            <article className="explorerList">
                {
                    props.areas.map(area =>
                        <Area key={area.id}
                            getAttractions={props.getAttractions}
                            area={area} />)
                }
            </article>
        </>
    )
}

export default AreaList
