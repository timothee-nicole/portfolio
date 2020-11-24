import React, {useState} from 'react'
import data from '../data.json'

 const ExperienceCard = (props) => {
     const [isClicked, setClick] = useState(false);

    const handleClick = () => {
        setClick(
            !isClicked
        )
    }

    const company = data.experiences[`${props.company}`]

    
    return (
        <div>
            <div className="exp-card" style={{width: '300px'}}>
                    <section onClick={handleClick} className="header-exp">
                    <img src={company.images} alt={company.name} style={{width: '300px'}}/>
                    <h1>{company.position}</h1>
                    <h2><span class="flag-icon flag-icon-us"></span>{company.location}</h2>
                    </section>
                    {isClicked && 
                    <section className="exp-description">
                        <h3>My missions</h3>
                        {company.mission.map((elem, i) => (
                            <li key={i}>{elem}</li>
                        ))}
                        <h3>My Accomplishment{company.achievement.length > 1 ? "s": ""}</h3>
                        {company.achievement.map((elem, i) => (
                            <li key={i}>{elem}</li>
                        ))}
                    </section>
                    }
                </div>
        </div>
    )
}


export default ExperienceCard