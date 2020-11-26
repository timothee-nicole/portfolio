import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'

export default function NavMain() {
    return (
        <div className="nav-main">
           <NavLink exact to="/"><div className="logo"><img src="./images/logo.png" alt="logo" /></div></NavLink>
            <div className="nav">
                <div className="nav-link"><NavLink exact to="/experience">Experiences</NavLink></div>
                <div className="nav-link"><NavLink exact to="/cv">CV</NavLink></div>
                <div className="nav-link"><NavLink exact to="/project">Projects</NavLink></div>
                {/* <div className="nav-link"><NavLink exact to="/other">Other Project</NavLink></div> */}
            </div>
        </div>
    )
}
