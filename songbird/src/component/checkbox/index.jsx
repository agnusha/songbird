import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./styles.scss";

class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    checked: false,
    disabled: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  };

  _handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { disabled } = this.props;
    const { checked } = this.state;
    return (
      <div className="checkbox-container">
        <label className='checkbox-container__label'>
          <input
            type="checkbox"
            className="checkbox-container__input"
            checked={checked}
            disabled={disabled}
            onChange={this._handleChange}
          />
          <span
            className="checkbox-container__span"
          />
        </label>
      </div>
    );
  }
}

export default Checkbox;
