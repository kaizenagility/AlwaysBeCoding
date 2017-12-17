import React, { Component } from 'react';

class AddLogForm extends Component {
  constructor() {
    super();
    this.state = {
      minutes: null,
      notes: null,
      category: null,
      user: null,
    };
  }

  render() {
    return (
      <div className="addLogForm">
          <form onSubmit={(e) => this.props.handleLogFormSubmit(e, this.state)}>
            <input type="minutes" name="minutes" placeholder="minutes" value={this.state.minutes} onChange={this.handleChange} />
            <input type="notes" name="notes" placeholder="notes" value={this.state.notes} onChange={this.handleChange} />
            <input type="category" name="category" placeholder="category" value={this.state.category} onChange={this.handleChange} />
            <input type="submit" value="Log It!" />
          </form>
      </div>
    );
  }
}

export default AddLogForm;
