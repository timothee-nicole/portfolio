import React, { useState } from 'react'

export default function Profile() {
    const [display, setDisplay] = useState(false)

    return (
        <div style={{display: "flex", alignItems:"center"}} className="profile">
            <img src='./images/me.jpg' alt="Timothée NICOLE" className="profile-picture"/>

            <div><h1>Hi I am Timothée Nicole !</h1>
            <p>Born and raised in Normandy, I am now living in Paris.
            <br/> Coming from a family of entrepreneurs, I have always wanted to create my own company. Following my graduation for my entrepreneurship master at ESSCA, a French Business  School, I realized that in the current startup ecosystem, a founder needs to have hands-on knowledge of modern web technologies. This is why I decided to join IronHack Bootcamp to learn both frontend and backend web development. During this Bootcamp I became aware of the power and really enjoyed the fun of web programming languages such as JavaScript and am sure I will keep on being impressed as time goes by.</p>
            
            <p>A few things about me : I  love spending time with my family and friends, I enjoy going for a swimming sessions between two GitHub push. To me it feels like flying  in the water (Do you know anybody that has never dreamt of flying ?), I like hiking and wandering in the middle of nowhere but also in the middle of the crowd.
             </p>
             <ul>
                 <li> 🎮 I like playing video games, I have finished the pokedex. Isn't it a proof of dedication ?  I also like Role Play and Action games. From time to time I also like doing some Sudokus</li>
                 <li>📚 I also like to reading thrillers, adventure and SF books. Reading enables me to challenge imagination much more than when watching movies</li>
                 <li>🎬 I prefer TV Shows to movies. My favorite Movies and TV Shows genres are comedies, SF, actions/adventures, biographies documentaries, not to forget Disney Movies 😍.</li>
             </ul>
             </div>
             <div className="school">
                 <img src="./images/essca.png" alt="logo essca" />
                 <img src="./images/ironhack.png" alt="IronHack Logo" />
             </div>
        </div>
    )
}
