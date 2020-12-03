import React, { Component } from 'react'
import ExperienceCard from '../Components/ExperienceCard'
// import Slider from "react-slick";
import '../styles/experience.css'


let experienceArr = ["lecollectionist", "eat5", "tourscanner", "entrepreneuriales", "adagio", "disney"]
export default class Experiences extends Component {
    state = {
        slide: 0,
        limit: experienceArr.length-1,
        isMobile: window.innerWidth < 1000
    }

    handleDecrement = () => {
        if (!this.state.isMobile) {
            if (this.state.slide === 0 || this.state.slide === 1) {
                this.setState({
                    slide: this.state.limit - 1
                })
            } else {
                this.setState({
                    slide: this.state.slide - 2
                })
            }
        } else {
            if (this.state.slide === 0) {
                this.setState({
                    slide: this.state.limit
                })
            } else {
                this.setState({
                    slide: this.state.slide - 1
                })
            }
        }
    }

    handleIncrement = () => {
        if (!this.state.isMobile) {
            if (this.state.slide + 1 === this.state.limit || this.state.slide === this.state.limit) {
                this.setState({
                    slide: 0
                })
            } else {
                this.setState({
                    slide: this.state.slide + 2
                })
            }
        } else {
            if (this.state.slide === this.state.limit) {
                this.setState({
                    slide: 0
                })
            } else {
                this.setState({
                    slide: this.state.slide + 1
                })
            }
        }
    }


    render() {
        console.log(this.state.slide)
        return (
            <><p className="hint">Click the card to see more details</p>
            <div className="experience">
                    <div onClick={this.handleDecrement} className="arrow-btn"><i class="fas fa-arrow-left" ></i></div>
                    {this.state.isMobile ? <div>
                    <ExperienceCard company={experienceArr[this.state.slide]} />
                    </div> : <div style={{display: "flex", justifyContent: "space-between"}}>{this.state.slide !== this.state.limit ? <><ExperienceCard company={experienceArr[this.state.slide]} />
                    <ExperienceCard company={experienceArr[this.state.slide+1]} /></> : <><ExperienceCard company={experienceArr[this.state.slide]} />
                    <ExperienceCard company={experienceArr[0]} /></> }
                    </div>}
                    <div onClick={this.handleIncrement} className="arrow-btn"><i class="fas fa-arrow-right"></i></div>
            </div></>
        )
    }
}
