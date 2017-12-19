import React, { Component } from 'react';

class EditLogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      time: this.props.time,
      notes: this.props.notes,
      link: this.props.link,
      category_id: this.props.category_id,
      user_id: this.props.user_id
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
          <form onSubmit={(e) => this.props.update(e, this.state)}>
            <select name="category_id" value={this.state.category_id} onChange={this.handleChange}>
              <option value="7">Coding Practice</option>
              <option value="11">Job Applications</option>
              <option value="12">Networking Event</option>
              <option value="14">Project Worklog</option>
              <option value="13">Career Coaching</option>
              <option value="15">Other</option>
            </select>
            <input type="text" name="time" placeholder="time" value={this.state.time} onChange={this.handleChange} />
            <input type="textarea" name="notes" placeholder="notes" value={this.state.notes} onChange={this.handleChange} />
            <input type="text" name="link" placeholder="link" value={this.state.link} onChange={this.handleChange} />
            <input type="hidden" name="user_id" value="13" />
            <input type="hidden" name="id" value={this.state.id} />
            <input type="submit" value="Log It!" />
          </form>
      </div>
    );
  }
}

export default EditLogForm;
