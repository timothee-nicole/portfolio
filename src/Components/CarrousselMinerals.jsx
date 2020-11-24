import React, { Component } from 'react'

export default class CarrousselMinerals extends Component {

    state = {
        mineral: 1
    }

    handleDecrement = () => {
        if (this.state.mineral === 1) {
            this.setState({mineral: 4})
        }
        else {
            this.setState({mineral : this.state.mineral-1}) 
        }
    }

    handleIncrement = () => {
        this.setState({mineral : this.state.mineral+1})
    }

    render() {
        console.log(this.state.mineral+1)
        return (
            <div className="mineral-card">
                <button onClick={this.handleDecrement}>Previous </button>
                <img src={"./images/mineral"+this.state.mineral+".jpg"} alt="minerals" className="caroussel"/>
                <img src={"./images/mineral"+this.state.mineral+1+".jpg"} alt="minerals" className="caroussel"/>
                <img src={"./images/mineral"+this.state.mineral+2+".jpg"} alt="minerals" className="caroussel"/>
                <button onClick={this.handleIncrement}>Next</button>
            </div>
        )
    }
}
