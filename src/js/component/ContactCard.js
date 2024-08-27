import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";
import { useNavigate } from "react-router";

export const ContactCard = ({ contact, id }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

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
          
            <img
             className="card-image"
             src="https://www.pikpng.com/pngl/m/66-666510_contacts-svg-png-icon-free-download-onlinewebfonts-contacts.png"
             alt="contact-photo"
            />
            <h5 className="card-title">{contact.name}</h5>
          
        <div className="contact-card-info">         
          <p className="card-text">Email: {contact.email}</p>
          <p className="card-text">Phone: {contact.phone}</p>        
          <p className="card-text">Address: {contact.address}</p>
        </div>
        <div className="button-group">
          <button
            className="edit-contact"
            onClick={() => {
              actions.saveContactToEdit(contact)
              navigate("/edit")}}
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
