import React, {Component} from 'react';

class Log extends Component {
  constructor() {
    super();
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
          {this.state.userLogs && this.state.userLogs.map((log) =>
            <div key = {log.id}>
              <h4> Log: {log.id} </h4>
              <p>Minutes: {log.minutes} </p>
              <p>Notes: {log.notes} </p>
            </div>
           )}
      </div>
    )
  }
}

export default Log;

