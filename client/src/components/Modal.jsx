/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Rubric from './Rubric';

const Modal = ({ openLabel }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>{openLabel}</button>
      {modal && (
      <div className="modal">
        <div className="overlay" onClick={toggleModal} />
        <div className="modal-content">
          <div className="modal-content-2">
            <Rubric />
          </div>
          <button className="close-modal" onClick={toggleModal}>close</button>
        </div>
      </div>
      )}
    </>
  );
};

export default Modal;
