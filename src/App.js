import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experiences from './Pages/Experiences';
import NavMain from './Components/NavMain';
import FooterMain from './Components/FooterMain';

import Cv from './Pages/Cv';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
    <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience" component={Experiences} />
        <Route exact path="/cv" component={Cv} />
        <Route exact path="/project" component={Projects} />
        <Route exact path="/about" component={About} />
      </Switch>
      <FooterMain />
    </div>
  );
}

export default App;
