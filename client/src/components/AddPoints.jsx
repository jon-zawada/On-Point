import React, { useState } from 'react';
import Modal from './Modal';

const AddPoints = ({ add }) => {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState('');

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const AddButton = <button onClick={toggleInput}>Add Points</button>;
  const AddInput = (
    <div>
      <div>
        <input type="text" value={input} onChange={onChangeHandler} />
        <button onClick={toggleInput}>x</button>
      </div>
      <button onClick={() => add(input)}>Add Points</button>
      <Modal openLabel="Show Rubric" />
    </div>
  );

  return (
    <>
      {showInput ? AddInput : AddButton}
    </>
  );
};

export default AddPoints;
