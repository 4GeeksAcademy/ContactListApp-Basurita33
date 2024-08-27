import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ConfirmDeleteModal = ({ show, setShow, contact, id }) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="modal"
      tabIndex="-1"
      style={show ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete contact</h5>
            <button
              type="button"
              onClick={() => {
                setShow(false);
              }}
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete {contact}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => {
                setShow(false);
              }}
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                actions.deleteContact(id);
              }}
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
