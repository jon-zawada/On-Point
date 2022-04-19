import React, { useState } from 'react';
import Modal from './Modal';
import AddPoints from './AddPoints';

const UserDetail = () => {
  const [points, setPoints] = useState(100);

  const add = (numStr) => {
    // add check for number showing toast msg
    setPoints(points + Number(numStr));
  };

  return (
    <div className="user-detail">
      <div className="user-icon">
        <img src="images/default.png" alt="" />
        <h1>Jon Zawada</h1>
      </div>
      <div className="points">
        <h1>Point total</h1>
        <div>{points}</div>
        <AddPoints add={add} />
      </div>
    </div>
  );
};

export default UserDetail;
