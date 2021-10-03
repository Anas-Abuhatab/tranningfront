import React, { Component } from 'react';
import {withAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Favouriets from './components/Favouriets';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';



 class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
          {this.props.auth0.isAuthenticated ?<Home />:<Login/>}
          </Route>

          <Route exact path="/Favouriets">
          {this.props.auth0.isAuthenticated ?<Favouriets />:<Login/>}
          </Route>
          
        </Switch>
    
    </Router>
    </>
    )
  }
}

export default withAuth0(App)
