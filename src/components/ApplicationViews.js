import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"


const ApplicationViews = () => {
    return (
        <React.Fragment>

            <Route
                exact path="/" render={props => {
                    return (
                        <>
                            <img className="swings" src={require('./home/swings.jpeg')} alt="My Dog" />
                        </>
                    )
                }}
            />

            <Route
                path="/register" render={props => {
                    return <Register />
                }}
            />

            <Route
                path="/login" render={props => {
                    return <Login />
                }}
            />

            <Route
                path="/areas" render={props => {
                    return (
                        <>
                            <h1>Areas</h1>
                            <img className="swings" src={require('./home/swings.jpeg')} alt="My Dog" />
                        </>
                    )
                }}
            />

            <Route
                path="/attractions" render={props => {
                    return (
                        <>
                            <h1>Attractions</h1>
                            <img className="swings" src={require('./home/swings.jpeg')} alt="My Dog" />
                        </>
                    )
                }}
            />

            <Route
                path="/itinerary" render={props => {
                    return (
                        <>
                            <h1>Itinerary</h1>
                            <img className="swings" src={require('./home/swings.jpeg')} alt="My Dog" />
                        </>
                    )
                }}
            />

        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)