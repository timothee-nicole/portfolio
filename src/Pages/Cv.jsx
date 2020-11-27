import React from 'react'
import '../styles/cv.css'

export default function Cv() {
    return (
        <div className="cv-container">
            <object data="./images/resume.pdf" type="application/pdf" width="100%" height="800px"> 
                <p>It appears you don't have a PDF plugin for this browser.
                No biggie... you can <a href="./images/resume.pdf" download>click here to
                download the PDF file.</a></p>  
            </object>
        </div>
    )
}
