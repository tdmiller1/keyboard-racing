import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Race from './components/Race/Race';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/race" exact component={Race} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
