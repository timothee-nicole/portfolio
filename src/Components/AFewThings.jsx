import React from 'react'
import withLanguage from '../Components/Context/withLanguage'

const AFewThings = (props) => {

    console.log(props.context.language)
    return (
        <div>
        {props.context.language === "en" ? 
        
            <>
                <p>A few things about me : I  love spending time with my family and friends, I enjoy going for a swimming sessions between two GitHub push. To me it feels like flying  in the water (do you know anybody that has never dreamt of flying ?), I like hiking and wandering in the middle of nowhere but also in the middle of the crowd.
                </p>
                <ul>
                    <li> 🎮 I like playing video games, I have finished the pokedex. Isn't it a proof of dedication ?  I also like Role Play and Action games. From time to time I also like doing some Sudokus</li>
                    <li>📚 I also like reading thrillers, adventure and SF books. It enables me to challenge imagination much more than when watching movies</li>
                    <li>🎬 I prefer TV Shows to movies. My favorite Movies and TV Shows genres are comedies, SF, actions/adventures, biographies documentaries, not to forget Disney Movies 😍.</li>
                </ul>
            </> 

        :
        <>
                <p>Quelques informations à mon sujet :  J'adore passer du temps avec mes amis et ma famille. Mais j'aime aussi faire 2, 3 brasses entre deux Github push. Quand je nage, j'ai l'impression de voler dans l'eau (Vous connaissez quelqu'un vous qui n'a jamais rêvé de voler ?). J'aime aussi beaucoup me balader et admirer ce qui m'entoure, que ce soit au milieu de la foule ou perdu en pleine nature.
                </p>
                <ul>
                    <li> 🎮 J'aime bien jouer aux jeux vidéos de temps en temps, j'ai même fini le pokedex. Si ce n'est pas une preuve de persévérance ? J'aime bien aussi les jeux de rôles et les jeux d'actions. Et de temps en temps j'apprécie aussi un petit sudoku  </li>
                    <li>📚 J'aime aussi beaucoup lire. Je suis très thrillers, science fiction ou livre d'aventure ! Quand je lis, cela me permet de stimuler mon imagination, beaucoup plus que devant un film ou une série.</li>
                    <li>🎬 En parlant de cela, je préfère les séries aux films. Mes genres préférés sont les comédies, la science fiction, les films d'actions/aventures, les biographies et bien sûr les films Disneys 😍.</li>
                </ul>
            </> 
        }
        </div>
    )
}

export default withLanguage(AFewThings)
