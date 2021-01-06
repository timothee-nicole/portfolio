import React, { Component } from 'react'
import '../styles/footer.css'
import withLanguage from "../Components/Context/withLanguage"

class FooterMain extends Component {

    render() {
        console.log(this.props.context.language)
        return (
            <div className="footer-main">
                <div>
                    {this.props.context.language === "en" ? <button className="language" value="fr" onClick={this.props.context.setLanguage}>FR</button> : this.props.context.language === "fr" ? <button className="language" value="en" onClick={this.props.context.setLanguage}>EN</button>  : ''}
                </div>
                <div className="footer">
                    Contact:
                    <p><a href="tel:+33632946598">📱: +33.6.32.94.65.98 </a><br/> 
                    <a href="mailto:timothee.nicole@gmail.com">@: timothe.nicole@gmail.com</a></p> 
                </div>

                <div className="footer">© 2020 Timothée Nicole </div>

                <div className="footer">
                Made with React.js
                </div>

                <div className="footer-social">
                    <a className="social" href="https://github.com/timothee-nicole"><img src="https://lh3.googleusercontent.com/pw/ACtC-3ebEGpNM8eqkksb8USwpkMAb7xTaOwqpWvk21fWvb8jOXog95UUx0D91Xsp7j0aBY0qqvvX7XrcO4gur4RrpVMWMwkBX05Ap7OxN1t4WaXsVC8e2ARqSpWQRkBvNEc90sLhEA1p2oL_1go7pFQf2zlW=w860-h816-no?authuser=0" alt="GitHub"/></a>
                    <a className="social" href="https://www.linkedin.com/in/timoth%C3%A9e-nicole/" ><img src="https://lh3.googleusercontent.com/pw/ACtC-3e8Hs_aBlCIUYbGI8kMQ4Ua35x37wpDDbajs64AsjiWIThW2WCyn_hGF-18DoRgRjC583IxZbcKhOrqS-6_plot_88_eRive77-9Jl1XL8rzYzqR6EAJa46Zg_icplkmO18UkP2PNDvgtLxkZs1GMCN=s300-no?authuser=0" alt="LinkedIn"/></a>
                   
                </div>
            </div>
        )
    }
}

export default withLanguage(FooterMain)