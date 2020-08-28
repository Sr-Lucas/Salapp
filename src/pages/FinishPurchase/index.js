import React, { useState } from 'react';

import { Picker } from '@react-native-community/picker';

import Tile from '../../components/Tile';
import InfoTile from '../../components/InfoTile';

import {
  Container,
  PageCard,
  PageTitle,
  OrderCode,
  InfoContentText,
} from './styles';

const FinishPurchase = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  return (
    <Container>
      <PageCard>
        <PageTitle>FINALIZANDO</PageTitle>

        <Tile title="Pedido AK62" subtitle="Ricardo da Rocha - 3 dias atrás" />
        <OrderCode>AK62</OrderCode>
      </PageCard>

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

export default FinishPurchase;
