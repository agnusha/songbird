/* eslint-disable brace-style */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    currentRightItemNumber: PropTypes.number,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      currentRightItemNumber: props.currentRightItemNumber,
      checked: false,
      disabled: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.name !== prevState.name || nextProps.currentRightItemNumber !== prevState.currentRightItemNumber) {
      return {
        name: nextProps.name,
        currentRightItemNumber: nextProps.currentRightItemNumber,
        checked: false,
        disabled: false,
      };
    }
    return null;
  }

  setGuessedBefore = (flag, id) => this.props.onClick(flag, id)

  handleChange = () => {
    const { id, currentRightItemNumber } = this.props;
    let guessedBefore;
    if (this.state.disabled === false) {
      // right
      if (id === (currentRightItemNumber + 1)) {
        guessedBefore = this.setGuessedBefore(false, id);
        if (!guessedBefore) {
          this.setState({
            checked: !this.state.checked,
            disabled: true,
          });
        }
      }
      // wrong
      else {
        guessedBefore = this.setGuessedBefore(true, id);
        if (!guessedBefore) {
          this.setState({
            disabled: !this.state.disabled,
          });
        }
      }
    } else this.setGuessedBefore(false, id);
  };

  render() {
    const { checked, disabled } = this.state;
    return (
      <Row className="rounded-container__row" onClick={this.handleChange}>
        <div className="checkbox-container" >
          <label className='checkbox-container__label'>
            <input
              type="checkbox"
              className="checkbox-container__input"
              disabled={disabled}
              checked={checked}
              onChange={() => { }}
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
