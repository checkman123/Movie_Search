import React from 'react';
import { Container } from "@material-ui/core";

import useStyles from './styles';
import { ListBoard } from './ListBoard';
import ExampleNav from '../Navigation/ExampleNav';

const UserMovieList = () => {
  const classes = useStyles();
  return (
    <Container maxwidth="lg">
      <ListBoard/>
    </Container>
  );
};

export default UserMovieList;
