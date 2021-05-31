import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, Container } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavBar from "./NavBar";
import NavItem from "./NavItem";

import decode from 'jwt-decode';
import memories from '../../Images/movies.jpg';


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

