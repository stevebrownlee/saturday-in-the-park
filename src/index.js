import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import ItineraryBuilder from './components/ItineraryBuilder'
import './index.css'

ReactDOM.render(
  <Router>
      <ItineraryBuilder />
  </Router>
  , document.getElementById('root'))
