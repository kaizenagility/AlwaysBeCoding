import React, { Component } from 'react';
import CategoryList from './CategoryList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="dash">
        <h1>Dashboard</h1>

        <CategoryList logUpdated={this.props.logUpdated}/>

      </div>
    )
  }
}

export default Dashboard;
