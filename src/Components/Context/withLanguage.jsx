import React from 'react'
import { LanguageContext } from './LanguageContext'

const withLanguage = (ComponentToPassLanguageContextTo) => {
    return function (props) {
        return (
            <LanguageContext.Consumer>
                {(context) => (
                    <ComponentToPassLanguageContextTo {...props} context={context} />
                )}
            </LanguageContext.Consumer>
        )
    }
}

export default withLanguage
