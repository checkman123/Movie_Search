import React from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box } from "@material-ui/core";
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home'
import Posts from "./components/Example/Example";
import Navigation from "./components/Navigation/Navigation";
import ExampleNav from "./components/Navigation/ExampleNav";
import Auth from "./components/Auth/Auth";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import UserMovieList from "./components/UserMovieList/UserMovieList";
import UserListMovies from "./components/UserListMovies/UserListMovies";
import UserProfile from "./components/UserProfile/UserProfile";
import Search from "./components/Search/Search";
import About from "./components/About/About";
import ProfileEditor from "./components/ProfileEditor/ProfileEditor"
import PrivacyPolicy from './components/Privacy/PrivacyPolicy';
import TermsOfServices from './components/Terms/TermsOfServices';



const App = () => {

  return (
    <BrowserRouter>
      <Box>
        <Navigation/>
        <Container maxwidth="lg">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/auth" component={Auth} />
            <Route path="/movie" component={MovieInfo} />
            <Route path="/movie-lists" component={UserMovieList} />
            <Route path="/movie-list" component={UserListMovies} />
            <Route path="/user-info" component={UserProfile} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About}/>
            <Route path="/profile-editor" component={ProfileEditor}/>
            <Route path="/privacy" component={PrivacyPolicy}/>
            <Route path="/terms" component={TermsOfServices}/>
            
          </Switch>
        </Container>
        
      </Box>
    </BrowserRouter>
  );
};

export default App;