import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./styles.scss";

class Checkbox extends Component {

  static propTypes = {
    id: PropTypes.number,
    currentRightItemNumber: PropTypes.number,
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

  _ChangeFromParent = () => {

    console.log("_ChangeFromParent");
    console.log(this);

    const { id, currentRightItemNumber } = this.props;

    console.log(this);
    console.log(id);
    console.log(currentRightItemNumber);

    if (id === (currentRightItemNumber + 1)) {
      this.setState({
        checked: !this.state.checked,
        disabled: true,
      });
    }
    else {
      this.setState({
        disabled: !this.state.disabled,
      });
    }


  };

  _handleChange = () => {
    const { id, currentRightItemNumber } = this.props;

    console.log(this);
    console.log(id);
    console.log(currentRightItemNumber);

    if (id === (currentRightItemNumber + 1)) {
      this.setState({
        checked: !this.state.checked,
        disabled: true,
      });
    }
    else {
      this.setState({
        disabled: !this.state.disabled,
      });
    }


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
