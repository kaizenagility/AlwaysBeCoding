import React, {Component} from 'react';

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
        <h2> Categories </h2>
          {this.state.userCategories && this.state.userCategories.map((category) =>
            <div key = {category.id}>
              <h4> {category.name} </h4>
            </div>
           )}
      </div>
    )
  }
}

export default CategoryList;
