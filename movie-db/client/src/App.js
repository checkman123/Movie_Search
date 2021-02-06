import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home'
import Example from "./components/Example/Example";
import NavBar from "./components/Navigation/NavBar";

const App = () => {

  return (
    <Router>
      <Container>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/example">
            <Example />
          </Route>
        </Switch>


          
          
      </Container>
    </Router>
  );
};

export default App;