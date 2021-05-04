import React from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box } from "@material-ui/core";

import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box height="300px" className={classes.background}>
      <Typography className={classes.heading}variant="h5">FOOTER</Typography>
    </Box>
  );
};

export default Footer;
