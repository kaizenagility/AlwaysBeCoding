import React, {Component} from 'react';
import Log from './Log.jsx';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      userCategories: null
    }
  }
  componentDidMount() {
    fetch('/users/13/categories/')
      .then(res => res.json())
      .then(res => {
        this.setState({
          userCategories: res
        })
      }).catch(err => console.log(err));
  }
  render() {
    return (
      <div className="dash">
          <h2>Dashboard</h2>
          {this.state.userCategories && this.state.userCategories.map((category) =>
            <div key = {category.id}>
              <Log id={category.id} name={category.name} />
              <hr />
            </div>
           )}
      </div>
    )
  }
}

export default CategoryList;
