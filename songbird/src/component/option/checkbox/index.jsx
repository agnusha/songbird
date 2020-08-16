import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Row } from "react-bootstrap";

class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    currentRightItemNumber: PropTypes.number,
    name: PropTypes.string,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      checked: false,
      disabled: false,
    };
  };


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.name !== prevState.name) {
      return {
        name: nextProps.name,
        checked: false,
        disabled: false,
      };
    }
    return null;
  }

  _setGuessedBefore = (flag, id) => {
    return this.props.onClick(flag, id);
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
