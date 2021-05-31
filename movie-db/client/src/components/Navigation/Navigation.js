import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, Container, Grid } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavBar from "./NavBar";
import NavItem from "./NavItem";

import decode from 'jwt-decode';
import logo from '../../Images/movie-logo.png';


import useStyles from './styles';
import './styles.scss';

//Icons
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Navigation = (props) => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const getUser = JSON.parse(localStorage.getItem('profile'));
    var userId;
    
    const logout = () => {
        dispatch({ type: "LOGOUT" })
  
        history.push('/');
  
        setUser(null);
      }

    //[location] = when location changes -> update
    useEffect(() => {
      const token = user?.token;

      //check JWT, if it expired then log out
      if(token) {
        const decodedToken = decode(token);

        if(decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    //Check if user is login by us or Google
    if(getUser){
      if(getUser.result._id){
        userId = getUser.result._id;
      } else { 
        userId = getUser.result.googleId;
      }
    }

  return (
    <div className="navBgColor">
        <Container>
            <Grid container>
                <Grid item xs={10}>
                <a href="/" className={classes.brandContainer}>
                    <img className={classes.image} src={logo} alt="icon" height="60" />
                    <Typography className={classes.heading} variant="h5" align="center">Movie Stack</Typography>
                </a>
                </Grid>
                    
                <Grid item xs={2}>
                    <NavBar>
                        <NavItem icon={<AssignmentIcon/>} link={"/posts"}/>
                
                        {user?.result ? (
                            <NavItem icon={<AccountCircleIcon/>}>
                                <DropdownMenu/>
                            </NavItem>
                        ) : (
                            <Button component={Link} to="/auth" className={classes.signIn} variant="contained" color="default">Sign In</Button>
                        )}
                    </NavBar>
                </Grid>
            </Grid>
        </Container>
    </div>


  );

  //Once user is sign in, the signin button is hidden and show drop down menu
  function DropdownMenu(){
    function DropdownItem(props){
        return(
            <a href={props.link} className="menu-item" >
                    <span className="icon-button">{props.leftIcon}</span>
            </a>
        );
    }
    return(
        <div className="dropdown">
            <DropdownItem leftIcon={<AccountCircleIcon/>} link={"/user-info"}>My Profile</DropdownItem>
            <DropdownItem leftIcon={<AccountCircleIcon/>} link={`/movie-lists/${userId}`}>My List</DropdownItem>
            <div className="logout">
                <Button className={classes.logout} variant="contained" color="secondary" onClick={logout}>Logout</Button>
            </div>
            
        </div>
    );
    }
};

export default Navigation;

