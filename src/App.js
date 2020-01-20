import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Articles} from './components/Articles/Articles';
import {Destroy} from './components/Destroy/Destroy';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Articles} />
          <Route path="/destroy" exact component={Destroy} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
