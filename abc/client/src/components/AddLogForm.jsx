import React, { Component } from 'react';

class AddLogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: null,
      notes: null,
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
            <select name="category_id" value={this.state.value} onChange={this.handleChange}>
              <option value="3">Coding</option>
              <option value="4">Art</option>
            </select>
            <input type="text" name="minutes" placeholder="minutes" value={this.state.minutes} onChange={this.handleChange} />
            <input type="textarea" name="notes" placeholder="notes" value={this.state.notes} onChange={this.handleChange} />
            <input type="hidden" name="user_id" value="13" />
            <input type="submit" value="Log It!" />
          </form>
      </div>
    );
  }
}

export default AddLogForm;
