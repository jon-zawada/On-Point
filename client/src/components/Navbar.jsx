import React from 'react';
import { Link } from 'react-router-dom';

const tabs = [
  { name: 'Home', path: 'home' },
  { name: 'Rubrik', path: 'rubrik' },
  { name: 'Add', path: 'add' },
  { name: 'Rewards', path: 'rewards' },
];

const Navbar = () => (
  <div className="nav-bar">
    <ul>
      {tabs.map((tab) => (
        <li>
          <Link to={`/${tab.path}`}>{tab.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;
