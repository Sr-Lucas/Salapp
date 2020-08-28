import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ActionsContainer,
  Button,
  InfoWrapper,
  TextInfo,
} from './styles';

const ItemTile = ({
  title = '',
  subtitle = '',
  iconName = 'edit',
  children,
  style,
  value,
}) => {
  return (
    <Container
      title={title}
      subtitle={subtitle}
      iconName={iconName}
      style={style}
    >
      <ActionsContainer>
        <Button>
          <Icon name="add" size={25} color="#fff" />
        </Button>

        <InfoWrapper>
          <TextInfo>{value}</TextInfo>
        </InfoWrapper>

        <Button>
          <Icon name="remove" size={20} color="#fff" />
        </Button>
      </ActionsContainer>
    </Container>
  );
};

export default ItemTile;
