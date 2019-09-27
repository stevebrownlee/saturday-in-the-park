import React from "react"

const Area = props => {

    return (
        <>
            <section className="parkArea">
                <button className="fakeLink parkArea__link" onClick={() => console.log(props.area.id)}>{props.area.name}</button>
            </section>
        </>
    )
}

export default Area
