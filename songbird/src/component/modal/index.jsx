import React, { Component } from "react";

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from "react-bootstrap";
import "./styles.scss";

class ModalResult extends Component {
  static propTypes = {
    score: PropTypes.number,
    maxResult: PropTypes.number,
    showModal: PropTypes.bool,
    onClick: PropTypes.func,
  };

  handleCloseOk = () => {
    return this.props.onClick(false);
  }

  handleCloseAgain = () => {
    return this.props.onClick(true);
  }

  render() {
    const { score, maxResult, showModal } = this.props;

    return (
      <div id="resultModal" className={classNames({
        'modal-result': true,
        'show': showModal,
      })}>

        <div className="modal-result__modal-content">
          <div className="modal-header">
            <h3>Результат</h3>
            <button type="button" className="close" onClick={this.handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            {(score === maxResult)
              ? <div>
                <div>
                  Вы набрали максимум баллов ({score}).
                  </div>
                <img className="best-result_img" alt="best result"></img>
              </div>
              : <p>
                Вы набрали {score} баллов из {maxResult} возможных.
               </p>
            }
          </div>
          <div className="modal-footer">
            {(score < maxResult)
              && <Button variant="secondary" onClick={this.handleCloseAgain}>
                Пройти еще раз
            </Button>}

            <Button variant="primary" onClick={this.handleCloseOk}>
              Ок
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalResult;
