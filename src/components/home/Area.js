import React from "react"

const Area = props => {

    return (
        <>
            <section className="parkArea">
                <header className="parkArea__header">{props.area.name}</header>
            </section>
        </>
    )
}

export default Area
