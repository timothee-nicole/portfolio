import React, { useState, useEffect } from 'react'
import AFewThings from './AFewThings';
import withLanguage from './Context/withLanguage'


function Profile(props) {
    const [display, setDisplay] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    function handleDetails() {
        setDisplay(
            !display
        )
    }    

    return (
        <div className="profile">
            <img src='https://lh3.googleusercontent.com/pw/ACtC-3fF-OYZP65zNxQXG8-aYhPmmY-Mne6NAST0r6OenuOXHviGBrK4OYMcMWkfkTBiIkyFHNeqA-ef4kcJ8ilLh3Fyto1zsBdpsx85GldxiH_oY6FX-FTUb0-iuaxbePKBS7sSm1NQX20RALC5lMfYVxVp=w276-h354-no?authuser=0' alt="Timothée NICOLE" className="profile-picture"/>

            {props.context.language === "en" ? 
                <div>
                    <h2>70% Marketing & 30% Web Development = 100% Timothée Nicole</h2>
                    <p>Born and raised in Normandy, I am now living in Paris.<br/>
                    Coming from a family of entrepreneurs, I have always wanted to create my own company. Following my graduation for my entrepreneurship master at ESSCA, a French Business  School, I realized that in the current startup ecosystem, a founder needs to have hands-on knowledge of modern web technologies. This is why I decided to join IronHack Bootcamp to learn both frontend and backend web development. During this Bootcamp I became aware of the power and really enjoyed the fun of web programming languages such as JavaScript and am sure I will keep on being impressed as time goes by.</p>

                    {!display && isMobile ? <p onClick={handleDetails} style={{textAlign: "center", color:"#002395"}}> View More Details...</p> : display ?
                    <AFewThings /> 
                    : 
                    <AFewThings/>
                    }

                    {isMobile && display ? <p onClick={handleDetails} style={{textAlign: "center", color:"#002395"}}> View Less Details...</p> : ''}
                
                </div>
            :
                <div>
                    <h1>70% Marketing & 30% Développement Web = 100% Timothée Nicole</h1>
                    <p>Né et élevé en Normandie, je vis désormais à Paris. <br/> 
                    Ayant grandi dans une famille d'entrepreneurs, j'ai toujours voulu créer ma propre entreprise. Après ma formation en Master entrepreneuriat à l'ESSCA, je me suis rendu compte que dans l'environnement des start-ups, un créateur d'entreprise a besoin d'avoir des compétences techniques sur les nouvelles technologies web. C'est pourquoi j'ai décidé de rejoindre le Bootcamp de IronHack pour apprendre autant le développement back-end que le développement front-end. Pendant ce bootcamp je me suis vite rendu compte de la puissance et du côté sympa des langages de programmation comme JavaScript. Aussi je continue d'être surpris par ce language avec le temps qui passe.</p>

                    {!display && isMobile ? <p onClick={handleDetails} style={{textAlign: "center", color:"#002395"}}> View More Details...</p> : display ?
                    <AFewThings/>
                    : 
                    <AFewThings/>
                    }

                    {display && isMobile && <p onClick={handleDetails} style={{textAlign: "center", color:"#002395"}}> View Less Details...</p> }
                    </div>
            }
             <div className="school">
                 <img src="https://lh3.googleusercontent.com/pw/ACtC-3ez4w0Ir9o8PlTLpDpaVsxXlspsfxMETuvMWSIcd7QkKSQf_5BuUUKgav0ZO9gNr9rgpCmuAdlmfYwPg0xeYyxwYd2aDOZpAMlOL-25aMQwAlGowxdDt1jgnyq4X-378tjfB3fcRbTQN_AbzLwLh3_2=w878-h808-no?authuser=0" alt="logo essca" />
                 <img src="https://lh3.googleusercontent.com/pw/ACtC-3ck1-67aaxhxDLWpvhJbet3coo3ZwBEVcD-qpQ1FIrYs7aVdnjKNoYRMmtQ4tX_1-Ofen2LR9y2KH4bV7oSqoDkkoQwkyJgA52mowuHoYvwDn9BIirQxeZZrUEVpR7QmFmoIfJPeybCbODtn5KvYPeL=s867-no?authuser=0" alt="IronHack Logo" />
             </div>
        </div>
    )
}

export default withLanguage(Profile)