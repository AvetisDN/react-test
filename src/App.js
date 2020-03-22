import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainNav from './components/layout/MainNav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Users from './components/users/Users';
import Post from './components/posts/Post';
import Posts from './components/posts/Posts';
import PostsMenu from './components/layout/PostsMenu';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      mainMenu: []
    }
  }

  componentDidMount() {
    const menuData = [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'Posts',
        url: '/posts'
      },
      {
        title: 'Users',
        url: '/users'
      }
    ];
    this.setState({
      mainMenu: menuData
    })
  }

  render(){

    return (
      <Router>

          {this.state.mainMenu.length>0 && 
            <MainNav items={this.state.mainMenu} />
          }        
          
          <div className="container">
            <div className="row">
              <div className="col-3 p-3 bg-light">
                <PostsMenu/>
              </div>
              <div className="col-9 py-3">
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/about/:id' component={About} />
                  <Route exact path='/about/:id/:page' component={About} />
                  <Route exact path='/users' component={Users} />
                  <Route exact path='/posts' component={Posts} />
                  <Route exact path='/posts/:page' component={Posts} />
                  <Route exact path='/post/:id' component={Post} />
                  <Route path='*' component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
      </Router>
    )
  }

}

export default App;
