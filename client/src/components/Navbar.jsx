import React from 'react';
import { Link } from 'react-router-dom';

const tabs = [
  { name: 'Home', path: '/', key: 1 },
  { name: 'Rubric', path: '/rubric', key: 2 },
  { name: 'Add', path: '/add', key: 3 },
  { name: 'Rewards', path: '/rewards', key: 4 },
];

const Navbar = () => (
  <div className="nav-bar">
    <ul>
      {tabs.map((tab) => (
        <Link to={tab.path}>
          <li key={tab.key}>{tab.name}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default Navbar;
