import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import "./styles.scss";

class Category extends Component {
  static propTypes = {
    item: PropTypes.object,
    active: PropTypes.bool,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentCategory: props.category,
    };
  };

  clickCategory = () => {
    if (typeof this.props.onClick === 'function') {
      this.setState({ currentCategory: this.props.item.id });
      return this.props.onClick(this.props.item.id);
    }
  }

  render() {
    const { item, active } = this.props;
    const { currentCategory } = this.state;


    console.log("active");
    console.log(active);
    return (
      <li id={item.id} className={classNames({
        'page-item': true,
        'active': currentCategory === item.id,
      })}
        onClick={this.clickCategory} >
        <span className="page-link">{item.name} </span>
      </li>
    );
  }
}

export default Category;
