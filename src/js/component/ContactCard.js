import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";

export const ContactCard = ({ contact, id }) => {
  const { store, actions } = useContext(Context);

  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };
  const handleConfirmDelete = () => {
    setShowModal(false);
  };
 

  return (
      <div className="card-container">
        <div className="card-header">
          <div className="card-image">
            <img
             src="https://www.pikpng.com/pngl/m/66-666510_contacts-svg-png-icon-free-download-onlinewebfonts-contacts.png"
             alt="contact-photo"
             style={{
               width: "50px",
               height: "50px",
               marginRight: "10px",
               borderRadius: "50%",
              }}
            />
            <h5 className="card-title">{contact.name}</h5>
          </div>
        <div className="contact-card-info">         
          <p className="card-text">Email: {contact.email}</p>
          <p className="card-text">Phone: {contact.phone}</p>        
          <p className="card-text">Address: {contact.address}</p>
        </div>
        <div className="button-group">
          <button
            className="edit-contact"
            onClick={() => navigate(`/add/${contact.id}`)}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="delete-contact" onClick={handleDeleteClick}>
             <i className="fas fa-trash"></i>
          </button>
        </div>

        {showModal && (
          <ConfirmDeleteModal
            show={showModal}
            setShow={setShowModal}
            contact={contact.name}
            id={contact.id}
            onConfirm={handleConfirmDelete}
          />
        )}
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
};
