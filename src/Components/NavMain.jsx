import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'

export default function NavMain() {
    return (
        <div className="nav-main">
            <div className="logo">TIM-WORK</div>
            <div className="nav">
                <div className="nav-link"><NavLink exact to="/experience">My Experiences</NavLink></div>
                <div className="nav-link"><NavLink exact to="/cv">CV</NavLink></div>
                <div className="nav-link"><NavLink exact to="/project">My Projects</NavLink></div>
                <div className="nav-link"><NavLink exact to="/about">About Me</NavLink></div>
                <div className="nav-link"><NavLink exact to="/other">Other Project</NavLink></div>
            </div>
        </div>
    )
}
