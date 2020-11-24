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
                    <a className="social" href="https://github.com/timothee-nicole"><img src="https://ctl.s6img.com/society6/img/y-xZ_syD7LhIJOGtpdTU08ra6Aw/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/8e29a2e79387449caa28090d71f489e3/~~/github-logo-prints.jpg?wait=0&attempt=0" alt="GitHub"/></a>
                    <a className="social" href="https://www.linkedin.com/in/timoth%C3%A9e-nicole/" ><img src="https://lh3.googleusercontent.com/proxy/quMRDQj5qNP8fjrWwkPkykV_UkZR1IQFM9oB_Wol78NvekQ1o4bYG0QwhQNz1p5wt-Y-Kap0rtd_hmiqVfBhMA1RQ0o9QD9P8W2lJyA" alt="LinkedIn"/></a>
                    <a className="social" href="https://www.instagram.com/timotheenicole/" ><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="Instagram"/></a>
                </div>
            </div>
        )
    }
}
