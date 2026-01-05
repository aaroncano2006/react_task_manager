import { useState } from "react";
import Button from "./Button";

function Modal({ show, title, bodytext, submitButtonText, submitButtonBootstrap = null, toggleShow, target = null, action = null }) {

  return (
    <>
      {show && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <Button bootstrap="btn-close" type="button" action={() => toggleShow(false)} />
              </div>

              <div className="modal-body">
                <p>{bodytext}</p>
              </div>

              <div className="modal-footer">
                <Button bootstrap="btn btn-secondary" type="button" action={() => toggleShow(false)}>
                  Cancel·la
                </Button>
                <Button bootstrap={submitButtonBootstrap} type="button" action={() => action(target)}>
                  {submitButtonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {show && <div className="modal-backdrop fade show"></div>}
    </>
  );
}

export default Modal;
