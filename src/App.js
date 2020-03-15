import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';

class App extends Component {
  
  render(){
    return (
      <Router>
          <div className="container">
            <div className="row">
              <div className="col">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link active" to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/about'}>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/about/15'}>About + ID</Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
          
          <div className="container">
            <div className="row">
              <div className="col">
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/about/:id' component={About} />
                </Switch>
              </div>
            </div>
          </div>
      </Router>
    )
  }

}

export default App;
