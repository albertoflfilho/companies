import React from 'react';

import { Container } from './styles';

const Companies = ({ companies }) => (
  <Container>
    <header>{companies}</header>
  </Container>
);

export default Companies;
