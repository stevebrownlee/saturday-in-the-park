import React, { Component } from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./ItineraryBuilder.css"

class ItineraryBuilder extends Component {
    render() {
        return (
            <React.Fragment>
                <Route render={props => (
                    <NavBar {...props} />
                )} />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default ItineraryBuilder
