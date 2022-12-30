import React from 'react'
import { Link } from 'react-router-dom'
import App from './App'

const About = props => {
    return(
        <div>
            <Link to='/' relative={<App/>}>Home</Link>
            <h1>About</h1>
        </div>
    )
}

export default About