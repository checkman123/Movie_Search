import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home'
import Example from "./components/Example/Example";

const App = () => {

  return (
    <Router>
      <div>
        {/*<NavBar/>  HERE*/}
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/example">
              <Example />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;