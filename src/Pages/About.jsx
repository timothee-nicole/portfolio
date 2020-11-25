import React, { Component } from 'react'
import Carroussel from '../Components/Carroussel'
import Profile from '../Components/Profile'
import '../styles/about.css'

export default class About extends Component {
    render() {
        const mineralArr = ["amethyste", "aragonite", "malachite", "tourmaline", "bornite", "gypse", "marcassite", "opale", "quartz", "rose"];
        const streetArtArr = ["berlin", "templehof", "paris", "vilnius", "london", "barcelona", "lisbon", "ljubljana"]
        return (
            <div>
                <Profile />
                <Carroussel data={mineralArr} />
                <Carroussel data={streetArtArr} />
                <h1>Where I have been ?</h1>
                <img src="./images/been.jpg" alt="mapmonde" />
            </div>
        )
    }
}
