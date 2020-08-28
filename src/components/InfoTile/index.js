import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, InfoHeaderTile, InfoText, InfoContent } from './styles';

const InfoTile = ({ title, iconName, children }) => {
  return (
    <Container>
      <InfoHeaderTile>
        <Icon name={iconName} size={20} color="rgba(0, 0, 0, 0.3)" />
        <InfoText>{title}</InfoText>
      </InfoHeaderTile>

      <InfoContent>{children}</InfoContent>
    </Container>
  );
};

export default InfoTile;
