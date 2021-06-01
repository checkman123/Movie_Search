import React, {Component} from 'react';
import { Container, Typography, withTheme } from "@material-ui/core";

import useStyles from './styles';

const About = () => {
  const classes = useStyles();

  return (
    <div style={{color:"darkgrey"}}>
        <Container maxwidth="sm">
            <div>
                <Typography variant="h4" align="center" color="darkgrey" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="h5" align="center" color="darkgrey" paragraph>
                    Movie Stack is a group project created by Seattle Pacific University students. Our goal is to create a free product that is intuitive and convenient for users to store a  list of their favorite movies and share it with their friends. We hope we have a great experience with our product. Thank you for using Movie Stack.
                </Typography> 
            </div>
        </Container>
        <footer>
            <div style = {{borderBottom:"2px solid grey"}}>
                <Typography variant="h5" align="left" color="darkgrey">Contact us</Typography>
            </div>
            <Typography variant="h5" align="center" color="darkgrey" paragraph>
                If you have any questions or sugguestion for improvement, you can contact us at sirijirakars@spu.edu (lead developer) <a href="mailto:sirijirakars@spu.edu" style={{color:'blue'}}> here</a>. 
            </Typography>
            
        </footer>
    </div>
    
  );
};

export default About;