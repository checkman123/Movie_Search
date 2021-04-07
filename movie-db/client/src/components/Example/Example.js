import React from 'react';
import { Container } from "@material-ui/core";

import useStyles from './styles';
import { ExampleBoard } from './ExampleBoard';
import ExampleNav from '../Navigation/ExampleNav';

const Example = () => {
  const classes = useStyles();
  return (
    <Container maxwidth="lg">
      <ExampleBoard/>
    </Container>
  );
};

export default Example;
