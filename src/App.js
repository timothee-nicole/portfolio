import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experiences from './Pages/Experiences';
import NavMain from './Components/NavMain';
import FooterMain from './Components/FooterMain';
import withLanguage from './Components/Context/withLanguage'

import Cv from './Pages/Cv';


class App extends React.Component {

    componentDidMount() {
      if (navigator.language === 'fr' || navigator.language === "fr-FR") {
        this.props.context.setLanguage('fr')
      } else {
        this.props.context.setLanguage('en')
      }
    }
  
  render() {
    console.log(navigator.language)
    return (
      <div className="App">
      <NavMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/experience" component={Experiences} />
          <Route exact path="/cv" component={Cv} />
          <Route exact path="/project" component={Projects} />
        </Switch>
        <FooterMain />
      </div>
    );
  }
}

export default withLanguage(App);
