import React, {Component} from 'react';
import Log from './Log.jsx';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      userCategories: null,
      lastUpdated: Date.now()
    }
    this.fetchCategories = this.fetchCategories.bind(this);
  }
  componentDidMount() {
    this.fetchCategories();
  }
  fetchCategories() {
    fetch('/users/13/categories/')
      .then(res => res.json())
      .then(res => {
        this.setState({
          userCategories: res,
          lastUpdated: this.props.logUpdated
        })
      }).catch(err => console.log(err));
  }
  render() {
    if (this.props.logUpdated > this.state.lastUpdated) {
      this.fetchCategories();
    }
    return (
      <div className="dash">
          {this.state.userCategories && this.state.userCategories.map((category) =>
            <div id="category" key = {category.id}>
              <Log id={category.id} name={category.name} lastUpdated={this.state.lastUpdated} />
            </div>
           )}
      </div>
    )
  }
}

export default CategoryList;
