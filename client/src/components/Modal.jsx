/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

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
          <h2>hello modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iure, reprehenderit nam aliquam ab delectus ea quas qui maiores assumenda aut soluta vero, ipsam tempora doloremque, esse officiis sequi corporis.
          </p>
          <button className="close-modal" onClick={toggleModal}>close</button>
        </div>
      </div>
      )}
    </>
  );
};

export default Modal;
