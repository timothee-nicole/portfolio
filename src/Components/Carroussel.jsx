import React, { Component } from 'react'
import data from '../data.json'
import withLanguage from "./Context/withLanguage"

class Carroussel extends Component {

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
        let language = this.props.context.language
        let items = data[`${this.props.context.language}`].passion[this.props.data[this.state.index]]
        return (
            <div className="carousel">
            <img src={items.images} alt={items.name} />
            <div className="carousel-name">
                <button onClick={this.handleDecrement}><i className="fas fa-arrow-left" ></i></button>
                <div style={{color: items.color}}>{items.name}</div>
                <button onClick={this.handleIncrement}><i className="fas fa-arrow-right" ></i></button>
            </div>
            </div>
        )
    }
}

export default withLanguage(Carroussel)
