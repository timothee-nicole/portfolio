import React, { Component } from 'react'
import Carroussel from '../Components/Carroussel'
import Profile from '../Components/Profile'
import '../styles/about.css'

export default class Home extends Component {
    render() {
        const mineralArr = ["amethyste", "aragonite", "malachite", "tourmaline", "bornite", "gypse", "marcassite", "opale", "quartz", "rose"];
        const streetArtArr = ["berlin", "templehof", "paris", "london", "barcelona", "lisbon", "ljubljana"]
        return (
            <div>
                <Profile />
                <h1 className="passion-title">My Passions</h1>
                <section className="carousels">
                <div>
                <h1>Precious Stones</h1>
                <Carroussel data={mineralArr} />
                </div>
                <div>
                <h1>Traveling</h1>
                <img src="./images/been.jpg" alt="mapmonde" style={{width: "400px", height: "200px"}} />
                </div>
                <div>
                <h1>Street Art</h1>
                <Carroussel data={streetArtArr} />
                </div>
                </section>
            </div>
        )
    }
}
