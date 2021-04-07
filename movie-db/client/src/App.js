import React from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box } from "@material-ui/core";
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home'
import Example from "./components/Example/Example";
import NavBar from "./components/Navigation/NavBar";
import ExampleNav from "./components/Navigation/ExampleNav";
import Auth from "./components/Auth/Auth";

const App = () => {

  return (
    <BrowserRouter>
      <Box>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/example" component={Example} />
          <Route path="/auth" component={Auth} />
        </Switch>


          
          
      </Box>
    </BrowserRouter>
  );
};

export default App;