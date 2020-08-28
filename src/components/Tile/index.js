import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  PrefixContainer,
  ContentContainer,
  ContentTitle,
  ContentSubTitle,
} from './styles';

const Tile = ({
  title = '',
  subtitle = '',
  iconName = 'edit',
  children,
  style,
}) => {
  return (
    <Container style={style}>
      <PrefixContainer>
        <Icon name={iconName} size={28} color="#fff" />
      </PrefixContainer>

      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubTitle>{subtitle}</ContentSubTitle>
      </ContentContainer>

      {children}
    </Container>
  );
};

export default Tile;
