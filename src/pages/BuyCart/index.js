import React from 'react';

import ItemTile from '../../components/ItemTile';

import Tile from '../../components/Tile';

import {
  Container,
  HeaderContainer,
  ContentContainer,
  TitleContainer,
  Title,
  PageCard,
  FinishPurchaseButton,
  FinishPurchaseText,
} from './styles';

// 8:41 - 10:27

const BuyCart = ({ navigation }) => {
  function handleFinishPurchase() {
    navigation.navigate('FinishPurchase');
  }

  return (
    <Container>
      <PageCard>
        <HeaderContainer>
          <Tile
            iconName="edit"
            title="Digitando pedido AK62"
            subtitle="usuário Ricardo"
          />
        </HeaderContainer>

        <ContentContainer>
          <TitleContainer>
            <Title>Lista de itens</Title>
          </TitleContainer>

          <ItemTile
            title="Limão"
            subtitle="8,99 kg"
            value={`${30}g`}
            iconName="local-offer"
          />
          <ItemTile
            title="Limão"
            subtitle="8,99 kg"
            value={`${30}g`}
            iconName="local-offer"
          />
          <ItemTile
            title="Limão"
            subtitle="8,99 kg"
            value={`${30}g`}
            iconName="local-offer"
          />
          <ItemTile
            title="Limão"
            subtitle="8,99 kg"
            value={`${30}g`}
            iconName="local-offer"
          />
        </ContentContainer>
      </PageCard>

      <FinishPurchaseButton onPress={handleFinishPurchase}>
        <FinishPurchaseText>Finalizar Compra</FinishPurchaseText>
      </FinishPurchaseButton>
    </Container>
  );
};

export default BuyCart;
