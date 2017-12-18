import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCategories: null,
      userLogs: null
    }
  }
  componentDidMount() {
    fetch('/users/13/categories/7/logs')
      .then(res => res.json())
      .then(res => {
        this.setState({
          userLogs: res
        })
      }).catch(err => console.log(err));
  }
  render() {
    return (
      <div className="dash">

      </div>
    )
  }
}

export default Dashboard;
