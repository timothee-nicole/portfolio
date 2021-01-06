import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'
import withLanguage from './Context/withLanguage'
import {Nav, Navbar} from 'react-bootstrap'


function NavMain(props) {

    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/"><img style={{width: "120px"}} src="https://lh3.googleusercontent.com/pw/ACtC-3frK5p5rXppg9wdgfYXODCKRXOohV21VzconRHbT7XqYVsgOO8jhjxTe1vXX5v5vBpq9RSEYsDGPSZasrec8_KROsArlRsp4JJ2v0dV4Tkg7lwBWe0tSA-Knn7LFQLEO-g2ufp_MhdAaqBd7Zzqpen9=w544-h234-no?authuser=0" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="/experience"><i class="fas fa-briefcase"></i> &nbsp; {props.context.language === "en" ? "Experiences" : "Expériences" }</Nav.Link>
                <Nav.Link href="/cv"><i class="fas fa-file-pdf"></i> &nbsp; 
                {props.context.language === "en" ? "Resume" : "CV" }
                </Nav.Link>
                <Nav.Link href="/project"><i class="fas fa-lightbulb"></i> &nbsp; 
                {props.context.language === "en" ? "Projects" : "Projets" }
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </>
    )
}

export default withLanguage(NavMain)