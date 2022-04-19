import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Rubric = () => {
  const [rubric, setRubric] = useState([]);
  // const [something, setSomething]
  useEffect(() => {
    axios.get('/api/rubric')
      .then((res) => {
        console.log(res);
        setRubric(res.data);
      });
  }, []);
  return (
    <div className='rubric'>
      {rubric.map((thing) => (
        <div key={thing.id}>
          <span>{thing.pointtype}</span>
          <span>{thing.pointworth}</span>
        </div>
      ))}
    </div>
  );
};

export default Rubric;
