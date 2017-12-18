import React, {Component} from 'react';

class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCategories: null,
      userLogs: null
    }
    this.renderLogs = this.renderLogs.bind(this);
    this.deleteLog = this.deleteLog.bind(this);
  }
  componentDidMount() {
    this.renderLogs();
  }
  renderLogs(){
    fetch('/users/13/categories/7/logs')
      .then(res => res.json())
      .then(res => {
        this.setState({
          userLogs: res
        })
      }).catch(err => console.log(err));
  }
  deleteLog(id) {
    fetch(`users/13/categories/7/logs/${id}`, {
      method: 'DELETE'
    }).then((res)=>{this.renderLogs();})
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="dash">
          <h3> Category: {this.props.name} </h3>
          {this.state.userLogs && this.state.userLogs.map((log) =>
            <div key = {log.id}>
              <h4> Log {log.id} </h4>
              <p>Minutes: {log.minutes} </p>
              <p>Notes: {log.notes} </p>
              <button>Edit Log</button>
              <button onClick={()=>{this.deleteLog(log.id)}}>Delete Log</button>
            </div>
           )}
      </div>
    )
  }
}

export default Log;

