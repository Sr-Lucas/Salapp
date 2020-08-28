import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, SelectedCircle, IconItem } from './styles';

const ProductItem = ({ item }) => {
  return (
    <Container>
      <SelectedCircle />
      <Icon name="favorite-border" size={22} color="#fff" />
    </Container>
  );
};

export default ProductItem;
