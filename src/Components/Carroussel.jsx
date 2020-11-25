import React, { Component } from 'react'
import data from '../data.json'

export default class Carroussel extends Component {

    state = {
        index: 0,
        size: null
    }

    componentDidMount() {
        this.setState({
            size: this.props.data.length
        })
    }

    handleDecrement = () => {
        if (this.state.index === 0) {
            this.setState({index: this.state.size - 1})
        }
        else {
            this.setState({index : this.state.index-1}) 
        }
    }

    handleIncrement = () => {
        if (this.state.index === this.state.size-1) {
            this.setState({index: 0})
        } else {
            this.setState({index : this.state.index+1})
        }
    }

    render() {
        let items = data.passion[this.props.data[this.state.index]]
        return (
            <div>
            <img src={items.images} alt={items.name} style={{width: "150px", height:"150px"}} />
            <div style={{disply: "flex",  flexDirection:"row", justifyContent:'space-evenly'}}>
                <button onClick={this.handleDecrement}><i className="fas fa-arrow-left" ></i></button>
                <span style={{color: items.color, fontSize:"16px", margin: "5px"}}>{items.name}</span>
                <button onClick={this.handleIncrement}><i className="fas fa-arrow-right" ></i></button>
            </div>
            </div>
        )
    }
}
