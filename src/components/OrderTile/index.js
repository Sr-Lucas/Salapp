import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  PrefixContainer,
  ContentContainer,
  SuffixContainer,
  ContentTitle,
  ContentSubTitle,
} from './styles';

const OrderTile = ({
  title = '',
  subtitle = '',
  iconName = 'local-shipping',
}) => {
  return (
    <Container>
      <PrefixContainer>
        <Icon name={iconName} size={28} color="#fff" />
      </PrefixContainer>

      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubTitle>{subtitle}</ContentSubTitle>
      </ContentContainer>

      <SuffixContainer>
        <Icon name="more-vert" size={28} color="#000" />
      </SuffixContainer>
    </Container>
  );
};

export default OrderTile;
