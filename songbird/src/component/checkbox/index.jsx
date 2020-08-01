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

  _handleChange = () => {
    const { id, currentRightItemNumber } = this.props;
    console.log("disabled");

    console.log(this);
    console.log(id);
    console.log(currentRightItemNumber);
    console.log(this.state.disabled);


    if (this.state.disabled === false) {
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

      if (typeof this.props.onClick === 'function') {
        this.props.onClick(this);
      }

    }

  };

  render() {
    const { checked } = this.state;
    const { disabled } = this.state;
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
