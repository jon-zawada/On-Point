import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Rubric = () => {
  const [rubric, setRubric] = useState([]);
  // const [something, setSomething]
  useEffect(() => {
    axios.get('/rubric')
      .then((res) => {
        setRubric(res.data);
      });
  }, []);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Things</th>
            <th>Rubric</th>
          </tr>
          {rubric.map((thing) => (
            <tr key={thing.id}>
              <td>{thing.pointtype}</td>
              <td>{thing.pointworth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rubric;
