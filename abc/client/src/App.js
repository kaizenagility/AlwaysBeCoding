import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';

import Auth from './modules/Auth';
import Nav from './components/Nav';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AddLogForm from './components/AddLogForm';
import CategoryList from './components/CategoryList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
      userData: null,
      userDataReceived: false,
      userCategories: null,
      userLogs: null,
      logUpdated: 0
    };
    // this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    // this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogFormSubmit = this.handleLogFormSubmit.bind(this);
  }

  // handleRegisterSubmit(e, data) {
  //   e.preventDefault();
  //   fetch('/users', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       user: data,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   }).then(res => res.json())
  //     .then(res => {
  //       Auth.authenticateToken(res.token);
  //       this.setState({
  //         auth: Auth.isUserAuthenticated(),
  //         //shouldGoToDash: true,
  //       });
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // }

  // handleLoginSubmit(e, data) {
  //   e.preventDefault();
  //   fetch('/login', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   }).then(res => res.json())
  //   .then(res => {
  //     Auth.authenticateToken(res.token);
  //     this.setState({
  //       auth: Auth.isUserAuthenticated(),
  //       //shouldGoToDash: true,
  //     });
  //   }).catch(err => console.log(err));
  // }

  handleLogFormSubmit(e, data) {
    e.preventDefault();
    fetch(`/users/13/categories/${data.category_id}/logs`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      this.setState({
        userData: res,
        userDataReceived: true,
        logUpdated: Date.now()
      })
    }).catch(err => console.log(err));
  }

  handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(res => {
      Auth.deauthenticateToken();
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err => console.log(err));
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(res => {
        this.setState({
          userData: res,
          userDataReceived: true,
        })
      }).catch(err => console.log(err));
  }

  renderUsers() {
    return this.state.userData.map((user) => {
      return (
        <div key={user.id}>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
         <Nav />
          <Route
            exact path="/register"
            render={() => (this.state.auth)
              ? <Redirect to="/dash" />
              : <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit} />} />
          <Route
            exact path="/login"
            render={() => (this.state.auth)
              ? <Redirect to="/dash" />
              : <LoginForm handleLoginSubmit={this.handleLoginSubmit} />}
          />

          <Route exact path="/dash" component={Dashboard} />

          <Route exact path="/journal" render={props => <AddLogForm handleLogFormSubmit={this.handleLogFormSubmit} /> } />



          { /* (this.state.userDataReceived)
            ? this.renderUsers()
            : <p>Loading...</p>
          */}
        </div>
      </Router>
    );
  }
}

export default App;
