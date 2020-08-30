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

  handleCloseAgain = () => {
    return this.props.onClick();
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
          </div>

          <div className="modal-body">
            {(score === maxResult)
              ? <div>
                <div>
                  Вы набрали максимум баллов ({score}).
                  </div>
                <div className="best-result_img"></div>
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

          </div>
        </div>
      </div>
    );
  }
}

export default ModalResult;
