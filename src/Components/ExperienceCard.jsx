import React, {useState} from 'react'
import data from '../data.json'
import withLanguage from './Context/withLanguage'

 const ExperienceCard = (props) => {
     const [isClicked, setClick] = useState(false);

    const handleClick = () => {
        setClick(
            !isClicked
        )
    }

    const company = data[`${props.context.language}`].experiences[`${props.company}`]

    
    return (
        <div>
            <div className="exp-card" style={{width: '300px'}}>
                    <section onClick={handleClick} className="header-exp">
                    <img src={company.images} alt={company.name} style={{width: '300px'}}/>
                    <h1>{company.position}</h1>
                    <h2>{company.location}</h2>
                    </section>
                    {isClicked && 
                    <section className="exp-description">
                        <h3> {props.context.language === "en" ? 'My Assignments' : 'Mes Missions'}</h3>
                        {company.mission.map((elem, i) => (
                            <li key={i} className="mission">{elem}</li>
                        ))}
                        <h3>{props.context.language === "en" ? 'My Achievement' : 'Mes réalisations'}{company.achievement.length > 1 ? "s": ""}</h3>
                        {company.achievement.map((elem, i) => (
                            <li key={i} className="achievement">{elem}</li>
                        ))}
                    </section>
                    }
                </div>
        </div>
    )
}


export default withLanguage(ExperienceCard)