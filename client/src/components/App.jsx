import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Rubric from './Rubric';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;

/*
 <Router>
        <div>
          <Header changeHover={this.changeHover} hover={hover} />
          <Switch>
            <Route path="/" exact render={() => <About changeHover={this.changeHover} />} />
            <Route path="/about" component={() => <About changeHover={this.changeHover} />} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/:id" component={ProjectInfo} />
          </Switch>
        </div>
      </Router>
*/


// <Router>
    //   <div>
    //     {/* <Header /> */}
    //     {/* <Switch>
    //       <Route />
    //     </Switch> */}
    //     <Route path="/rubric" exact component={Rubric} />
    //   </div>
    // </Router>