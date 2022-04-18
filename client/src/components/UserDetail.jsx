import React from 'react';
import Modal from './Modal';

const UserDetail = () => (
  <div className="user-detail">
    <div className="user-icon">
      <img src="images/default.png" alt="" />
      <h1>Jon Zawada</h1>
    </div>
    <div className="points">
      <h1>Point total</h1>
      <div>10000000</div>
      <Modal openLabel="open" />
    </div>
  </div>
);

export default UserDetail;
