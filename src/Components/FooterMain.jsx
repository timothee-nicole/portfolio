import React, { Component } from 'react'
import '../styles/footer.css'

export default class FooterMain extends Component {
    render() {
        return (
            <div className="footer-main">
                <div className="footer">
                    Contact:
                    <p><a href="tel:+33632946598">📱: +33.6.32.94.65.98 </a><br/> 
                    <a href="mailto:timothee.nicole@gmail.com">@: timothe.nicole@gmail.com</a></p> 
                </div>

                <div className="footer">© 2020 Timothée Nicole <br/>All rights reserved</div>

                <div className="footer">
                Made with React.js
                </div>

                <div className="footer-social">
                    <a className="social" href="https://github.com/timothee-nicole"><img src="./images/github.png" alt="GitHub"/></a>
                    <a className="social" href="https://www.linkedin.com/in/timoth%C3%A9e-nicole/" ><img src="./images/linkedin.jpg" alt="LinkedIn"/></a>
                   
                </div>
            </div>
        )
    }
}
