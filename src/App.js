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

//import {Sugar} from 'react-preloaders';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      mainMenu: [],
      loading: true
    }
    this.enablePreloader = this.enablePreloader.bind(this)
    this.disablePreloader = this.disablePreloader.bind(this)
  }

  enablePreloader() {
    if(!this.state.loading)
      this.setState({
        loading: true
      })
  }
  disablePreloader() {
    if(this.state.loading)
      this.setState({
        loading: false
      })
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
                  {/*<Route exact path='/' component={(props) => <Home {...props} enablePreloader={this.enablePreloader} disablePreloader={this.disablePreloader} /> } />*/}
                  {/*<Route exact path='/about' component={(props) => <About {...props} enablePreloader={this.enablePreloader} disablePreloader={this.disablePreloader} /> } />*/}
                  {/*<Route exact path='/about/:id' component={(props) => <About {...props} enablePreloader={this.enablePreloader} disablePreloader={this.disablePreloader} /> } />*/}
                  {/*<Route exact path='/about/:id/:page' component={(props) => <About {...props} enablePreloader={this.enablePreloader} disablePreloader={this.disablePreloader} /> } />*/}
                  {/*<Route exact path='/users' component={(props) => <Users {...props} enablePreloader={this.enablePreloader} disablePreloader={this.disablePreloader} /> } />*/}
                  {/*<Route exact path='/posts' component={(props) => <Posts {...props} enablePreloader={this.enablePreloader} disablePreloader={this.disablePreloader} /> } />*/}
                  {/*<Route exact path='/posts/:page' component={(props) => <Posts {...props} enablePreloader={this.enablePreloader} disablePreloader={this.disablePreloader} /> } />*/}
                  {/*<Route exact path='/post/:id' component={(props) => <Post {...props} enablePreloader={this.enablePreloader} disablePreloader={this.disablePreloader} /> } />*/}
                  {/*<Route path='*' component={(props) => <NotFound {...props} enablePreloader={this.enablePreloader} disablePreloader={this.disablePreloader} /> } />*/}
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
          {/*<Sugar customLoading={this.state.loading} time={500} color={'#778595'} />*/}
      </Router>
    )
  }

}

export default App;
