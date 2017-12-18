import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  renderLogs() {
    return this.state.userData.map((user) => {
      return (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>

        </div>
      );
    });
  }
  render() {
    return (
      <div className="dash">
        <h2> Dashboard </h2>
        <p>  </p>

      </div>
    )
  }
}

export default Dashboard;
