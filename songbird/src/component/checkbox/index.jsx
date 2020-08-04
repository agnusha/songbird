import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Row } from "react-bootstrap";

import "./styles.scss";

class Checkbox extends Component {

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    currentRightItemNumber: PropTypes.number,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
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

  _setGuessedBefore = (flag, id) => {
    if (typeof this.props.onClick === 'function') {
      return this.props.onClick(flag, id);
    }
    return false;
  }

  _handleChange = () => {
    const { id, currentRightItemNumber } = this.props;
    let guessedBefore;
    if (this.state.disabled === false) {
      // right
      if (id === (currentRightItemNumber + 1)) {
        guessedBefore = this._setGuessedBefore(false, id);
        if (!guessedBefore) {
          this.setState({
            checked: !this.state.checked,
            disabled: true,
          });
        }
      }
      // wrong
      else {
        guessedBefore = this._setGuessedBefore(true, id);
        if (!guessedBefore) {
          this.setState({
            disabled: !this.state.disabled,
          });
        }
      }
    }
    else this._setGuessedBefore(false, id);
  };

  render() {
    const { checked, disabled } = this.state;
    return (
      <Row className="rounded-container__row" onClick={this._handleChange}>
        <div className="checkbox-container"  >
          <label className='checkbox-container__label'>
            <input
              type="checkbox"
              className="checkbox-container__input"
              disabled={disabled}
              checked={checked}
              onChange={(e) => { }}
            />
            <span
              className="checkbox-container__span"
            />
          </label>
        </div>
        {this.props.name}
      </Row>
    );
  }
}

export default Checkbox;
