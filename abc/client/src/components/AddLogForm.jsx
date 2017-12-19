import React, { Component } from 'react';

class AddLogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      notes: null,
      link: null,
      category_id: null,
      user_id: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val,
    });
  }

  render() {
    return (
      <div className="addLogForm">
          <form onSubmit={(e) => this.props.handleLogFormSubmit(e, this.state)}>
            <select name="category_id" value={this.state.category_id} onChange={this.handleChange}>
              <option value="7">Coding Practice</option>
              <option value="11">Job Applications</option>
              <option value="12">Networking Event</option>
              <option value="14">Project Worklog</option>
              <option value="13">Career Coaching</option>
              <option value="15">Other</option>
            </select><br/>
            <input type="text" name="time" placeholder="minutes" value={this.state.time} onChange={this.handleChange} /><br/><br/>
            <input type="textarea" name="notes" placeholder="notes" value={this.state.notes} onChange={this.handleChange} /> <br/>
            <input type="text" name="link" placeholder="link" value={this.state.link} onChange={this.handleChange} /> <br/>
            <input type="hidden" name="user_id" value="13" />
            <input type="submit" value="Log It!" />
          </form>
      </div>
    );
  }
}

export default AddLogForm;
