import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./styles.scss";

class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.number,
    currentItemNumber: PropTypes.number,
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
      disabled: props.disabled,
    };
  };

  _handleChange = () => {
    const { id, currentItemNumber } = this.props;

    console.log(this);
    console.log(id);
    console.log(currentItemNumber);

    if (id === currentItemNumber)
      this.setState({
        checked: !this.state.checked,
      });
    else this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    const { checked } = this.state;
    const { disabled } = this.state;
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
