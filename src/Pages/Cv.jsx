import React from 'react'
import '../styles/cv.css'
import withLanguage from '../Components/Context/withLanguage'

function Cv(props) {
    return (
        <div className="cv-container">
            {props.context.language === "en" ? 
            <object data="./images/resume.pdf" type="application/pdf" width="100%" height="100%"> 
                <p>It appears you don't have a PDF plugin for this browser.
                No biggie... you can <a href="./images/resume.pdf" download>click here to
                download the PDF file.</a></p> 
            </object>

                :
                <object data="./images/CV.pdf" type="application/pdf" width="100%" height="100%"> 
                 <p>Il semble que vous n'avez pas de pluggin PDF pour ce navigateur. Mais pas de problèmes sans solutions... Vous pouvez <a href="./images/CV.pdf" download> cliquer sur ce lien pour le télécharger en PDF.</a></p>
                 </object>}  
        </div>
    )
    
}

export default withLanguage(Cv)