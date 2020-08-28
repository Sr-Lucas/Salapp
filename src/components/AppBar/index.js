import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';

const AppBar = () => {
  return (
    <Container>
      <Icon name="menu" size={25} color="#000" />
      <Title>SACOLÃO</Title>
      <Icon name="search" size={25} color="#000" />
    </Container>
  );
};

export default AppBar;
