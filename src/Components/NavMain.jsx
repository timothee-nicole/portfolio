import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'

export default function NavMain() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);



    function handleMenu() {
        // console.log('toto')
        let menu = document.getElementById("phone-menu")
        menu.classList.toggle('visible')
        console.log(menu)
    }
    return (
        <><div className="nav-main">
           <NavLink exact to="/"><div className="logo"><img src="./images/logo.png" alt="logo" /></div></NavLink>
            <div className="nav">
                {isMobile ? <div onClick={handleMenu}><i class="fas fa-bars" style={{color: "white", marginRight: "10px"}}></i>
                </div> : <><div className="nav-link" ><NavLink exact to="/experience">Experiences</NavLink></div>
                <div className="nav-link" ><NavLink exact to="/cv">CV</NavLink></div>
                <div className="nav-link" ><NavLink exact to="/project">Projects</NavLink></div></>}
            </div>
        </div>
        <section id="phone-menu" className="hidden">
            <li><NavLink exact to="/experience" onClick={handleMenu}>Experiences</NavLink></li>
            <li><NavLink exact to="/cv" onClick={handleMenu}>CV</NavLink></li>
            <li><NavLink exact to="/project" onClick={handleMenu}>Projects</NavLink></li>
        </section>
        </>
    )
}
