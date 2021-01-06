import React, { Component } from 'react'
import Carroussel from '../Components/Carroussel'
import Profile from '../Components/Profile'
import '../styles/about.css'
import withLanguage from '../Components/Context/withLanguage'

class Home extends Component {
    render() {
        const mineralArr = ["amethyste", "aragonite", "malachite", "tourmaline", "bornite", "gypse", "marcassite", "opale", "quartz", "rose"];
        const streetArtArr = ["berlin", "templehof", "paris", "london", "barcelona", "lisbon", "ljubljana"]
        return (
            <div>
                <Profile />
                <h1 className="passion-title">{this.props.context.language === "en" ? 'My Passions' : "Mes Passions"}</h1>
                <section className="carousels">
                <div>
                <h1>{this.props.context.language === "en" ? 'Precious Stones' : "Les Pierres Précieuses"}</h1>
                <Carroussel data={mineralArr} />
                </div>
                <div>
                <h1>{this.props.context.language === "en" ? 'Traveling' : "Voyager"}</h1>
                <img src="https://lh3.googleusercontent.com/pw/ACtC-3c3f8vJ2-AsXZ4uViwHrzExbSNnsIUHq0ys--jsmzDCbJNI5uih9pdk_ZeYu2_ScAArcMkpKLpiyOr7-n_saulhZXyEnwbjkofIx3LUn23nXurDz4hlCG8TiqktkCVI5hawfMJX0A4PPNd3C97ejbRf=w1814-h770-no?authuser=0" alt="mapmonde" className="mapemonde" />
                </div>
                <div>
                <h1>{this.props.context.language === "en" ? 'Street Art' : "Le Street Art"}</h1>
                <Carroussel data={streetArtArr} />
                </div>
                </section>
            </div>
        )
    }
}
 export default withLanguage(Home)