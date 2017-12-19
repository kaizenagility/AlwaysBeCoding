import React, {Component} from 'react';
import EditLogForm from './EditLogForm.jsx'
import Moment from 'react-moment';

class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCategories: null,
      userLogs: null,
      lastUpdated: 0,
      editID: null,
    }
    this.renderLogs = this.renderLogs.bind(this);
    this.deleteLog = this.deleteLog.bind(this);
    this.updateLog = this.updateLog.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }
  componentDidMount() {
    this.renderLogs();
  }
  renderLogs(){
    fetch(`/users/13/categories/${this.props.id}/logs`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          userLogs: res,
          lastUpdated: this.props.lastUpdated
        })
      }).catch(err => console.log(err));
  }
  deleteLog(id) {
    fetch(`users/13/categories/7/logs/${id}`, {
      method: 'DELETE'
    }).then((res)=>{this.renderLogs();})
    .catch(err => console.log(err));
  }
  updateLog(e, data) {
    e.preventDefault();
    fetch(`/users/13/categories/${data.category_id}/logs/${data.id}`, {
      method: 'PUT',
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
    }).then(() => this.renderLogs()
    ).then(res => {
      this.setState({
        editID: null,
      })
    }).catch(err => console.log(err));
  }
  edit(id) {
    this.setState({editID: id});
  }
  cancelEdit() {
    this.setState({editID: null});
  }
  render() {
    if (this.props.lastUpdated > this.state.lastUpdated) {
      this.renderLogs();
    }
    return (
      <div className="dash">
          <h3> {this.props.name} </h3>
          {this.state.userLogs && this.state.userLogs.map((log) =>
            <div className="log" key = {log.id}>
              <h4><Moment format="MM/DD/YY h:mm a">{log.created_at}</Moment></h4>
              <p>Time: {log.time} </p>
              <p>Notes: {log.notes} </p>
              <p>Link: {log.link} </p>
              {this.state.editID === log.id && <EditLogForm id={log.id} time={log.time} notes={log.notes} link={log.link} category_id={this.props.id} update={this.updateLog} cancel={this.cancelEdit} />}
              <button onClick={()=>{this.edit(log.id)}}>Edit Log</button>
              <button onClick={()=>{this.deleteLog(log.id)}}>Delete Log</button>
            </div>
           )}
      </div>
    )
  }
}

export default Log;

