import React, { Component } from "react";

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button, Modal } from "react-bootstrap";
import "./styles.scss";

class ModalResult extends Component {
  static propTypes = {
    score: PropTypes.number,
    maxResult: PropTypes.number,
    showModal: PropTypes.bool,
    onClick: PropTypes.func,
  };


  handleClose = () => {
    return this.props.onClick(false);
  }

  render() {
    const { score, maxResult, showModal } = this.props;

    return (
      <>
        <div className="container">
          <div className="interior">
            <a className="btn" href="#open-modal">Open Modal</a>
          </div>
        </div>
        <div id="open-modal" className={classNames({
          'modal-window': true,
          'show': true,
        })}>
          <div>
            <a href="#" title="Close" className="modal-close">Close</a>
            <h3>Результат</h3>

            <div class="modal-header">
              <h3>Результат</h3>
              <button type="button" class="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              {(score === maxResult)
                ? <div>
                  <div>
                    Вы набрали максимум баллов ({score}).
                  </div>
                  <img className="best-result_img"></img>
                </div>
                : <p>
                  Вы набрали {score} баллов из {maxResult} возможных.
                  </p>
              }
            </div>
            <div className="modal-footer">
              <Button variant="secondary" onClick={this.handleClose}>
                Пройти еще раз
            </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Ок
            </Button>
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default ModalResult;
