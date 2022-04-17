import React from 'react';
//refactor to react router

const tabs = [
  'Home',
  'Rubric',
  'Add',
  'Rewards',
];

const Navbar = () => (
  <nav>
    {tabs.map((tab) => (
      <a href={`/${tab}`}>{tab}</a>
    ))}
  </nav>
);

export default Navbar;
