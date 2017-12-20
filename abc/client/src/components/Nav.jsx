import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';

class Nav extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return (
      <div className="nav">
        <Link to="/login">Login</Link><br />
        <Link to="/register">Register</Link><br />
        <Link to="/dash">Dashboard</Link> <br />
        <Link to="/journal">Journal</Link>
      </div>
    )
  }
}

export default Nav;
