import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ConfirmDeleteModal = ({ show, setShow, contact, id }) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      class="modal"
      tabindex="-1"
      style={show ? { display: "block" } : { display: "none" }}
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete contact</h5>
            <button
              type="button"
              onClick={() => {
                setShow(false);
              }}
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete {contact}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              onClick={() => {
                setShow(false);
              }}
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                actions.deleteContact(id);
              }}
              class="btn btn-danger"
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
