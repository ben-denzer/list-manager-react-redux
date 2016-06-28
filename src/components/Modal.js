import React from 'react';

const Modal = (props) => {
  return (
    <div
      className="modal fade bs-modal-example-sm"
      id="myModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel">

      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel">Are you sure?</h4>
          </div>
          <div className="modal-body">
            Delete {props.activeList}?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={props.deleteList}
              data-dismiss="modal">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
