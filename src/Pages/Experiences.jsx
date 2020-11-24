import React, { Component } from 'react'
import ExperienceCard from '../Components/ExperienceCard'
// import Slider from "react-slick";
import '../styles/experience.css'


let experienceArr = ["lecollectionist", "eat5", "tourscanner", "entrepreneuriales", "adagio", "disney"]
let next = '-->'
export default class Experiences extends Component {
    state = {
        slide: 0,
        limit: experienceArr.length-1
    }

    handleDecrement = () => {
        if (this.state.slide === 0 || this.state.slide === 1) {
            this.setState({
                slide: this.state.limit - 1
            })
        } else {
            this.setState({
                slide: this.state.slide - 2
            })
        }
    }

    handleIncrement = () => {
        if (this.state.slide + 1 === this.state.limit || this.state.slide === this.state.limit) {
            this.setState({
                slide: 0
            })
        } else {
            this.setState({
                slide: this.state.slide + 2
            })
        }
    }


    render() {
        console.log(this.state.slide)
        return (
            <div className="experience">
                {/* <Slider {...settings}> */}
                    {/* {experienceArr.map((elem, i) => {
                        return <ExperienceCard company={elem} key="i" />
                    })} */}
                    <div onClick={this.handleDecrement} className="arrow-btn"><i class="fas fa-arrow-left" ></i></div>
                    {this.state.slide !== this.state.limit ? <><ExperienceCard company={experienceArr[this.state.slide]} />
                    <ExperienceCard company={experienceArr[this.state.slide+1]} /></> : <><ExperienceCard company={experienceArr[this.state.slide]} />
                    <ExperienceCard company={experienceArr[0]} /></> }
                    <div onClick={this.handleIncrement} className="arrow-btn"><i class="fas fa-arrow-right"></i></div>
                         
                {/* </Slider> */}
            </div>
        )
    }
}
