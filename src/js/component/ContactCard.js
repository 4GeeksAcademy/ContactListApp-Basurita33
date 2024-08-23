import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";


export const ContactCard = ({ contact }) => {
  const { store, actions } = useContext(Context);

  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };
  const handleConfirmDelete = () => {
    setShowModal(false);
  };
 

  return (
    // <div className="contac-card mb-3">
    //   <div className="row g-0">
    //     <div className="col-md-2 d-flex justify-content-center align-items-center">
    //       <img src="https://www.pikpng.com/pngl/m/66-666510_contacts-svg-png-icon-free-download-onlinewebfonts-contacts.png" className="img-fluid rounded-circle" alt= "contactName" />
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         <h5 className="card-title">{contact.name}</h5>
    //         <p className="card-text"><FaEnvelope /> {contact.email}</p>
    //         <p className="card-text"><FaPhone /> {contact.phone}</p>
    //         <p className="card-text"><FaMapMarkerAlt /> {contact.address}</p>        
    //       </div>
    //     </div>
    //     <div className="col-md-2 d-flex justify-content-around align-items-center">
    //       <button className="btn btn-light" onClick={() => navigate(`/add/${contact.id}`)}><FaEdit /></button>
    //       <button className="btn btn-light onClick={handleDeleteClick}"><FaTrashAlt /></button>
    //     </div>
    //   </div>
    // </div>

      <div className="contact-card">
        <div className="card-body">
          <div className="contact-card-image">
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
          </div>
        <div className="contact-card-info">
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">Email: {contact.email}</p>
          <p className="card-text">Phone: {contact.phone}</p>        
          <p className="card-text">Address: {contact.address}</p>
        </div>
        <div className="button-group">
          <button
            className="edit-contact"
            onClick={() => navigate(`/add/${contact.index}`)}
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
