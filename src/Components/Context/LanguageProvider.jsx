import React, { Component } from 'react'
import { LanguageContext } from './LanguageContext'

export default class LanguageProvider extends Component {

    state = {
        language: "en"
    }


    setLanguage = (e) => {
        if (e.target) {
            this.setState({
                language: e.target.value
            })
        } else {
            this.setState({
                language: e
            })
        }
    }

    render() {
        const languageValue = {
            language: this.state.language,
            setLanguage: this.setLanguage
        }
        return (
            <LanguageContext.Provider value={languageValue}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}
