import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-community/picker';

import InfoTile from '../../components/InfoTile';

import {
  Container,
  PageCard,
  TitleTile,
  Title,
  IconWrapper,
  HeaderContent,
  OrderCode,
  OrderDateCreation,
  OrderClient,
  PageTitleContainer,
  PageTitle,
  InfoContentText,
} from './styles';

const Order = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  return (
    <Container>
      <PageCard>
        <TitleTile>
          <IconWrapper>
            <Icon name="create" size={18} color="#fff" />
          </IconWrapper>
          <Title>Novo pedido</Title>
        </TitleTile>

        <HeaderContent>
          <OrderCode>AK62</OrderCode>
          <OrderDateCreation>January 27, 2017 - 3:45 PM</OrderDateCreation>
          <OrderClient>Ricardo da Rocha</OrderClient>
        </HeaderContent>
      </PageCard>

      <PageTitleContainer>
        <PageTitle>DADOS</PageTitle>
      </PageTitleContainer>

      <PageCard>
        <InfoTile title="DATE" iconName="date-range">
          <InfoContentText>June 8, 2017</InfoContentText>
        </InfoTile>

        <InfoTile title="FORMAS DE PAGAMENTO" iconName="account-balance-wallet">
          <Picker
            selectedValue={paymentMethod}
            style={{ height: 50 }}
            onValueChange={(itemValue) => setPaymentMethod(itemValue)}
          >
            <Picker.Item label="Cartão de crédito" value="credit-card" />
            <Picker.Item label="Dinheiro" value="money" />
            <Picker.Item label="Cheque" value="check" />
          </Picker>
        </InfoTile>

        <InfoTile title="VENDEDOR" iconName="face">
          <InfoContentText>Adobe Experience Design</InfoContentText>
        </InfoTile>

        <InfoTile title="DESCONTO" iconName="local-offer">
          <InfoContentText>YR84k092KSJDY</InfoContentText>
        </InfoTile>
      </PageCard>
    </Container>
  );
};

export default Order;
