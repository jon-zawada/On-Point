import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Rubric from './Rubric';
import Navbar from './Navbar';
import UserDetail from './UserDetail';

const App = () => (
  <div className="app-wrapper">
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Switch>
          <Route path="/" exact component={UserDetail} />
          {/* <Route path="/home" exact component={Header} /> */}
          <Route path="/rubric" exact component={Rubric} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
