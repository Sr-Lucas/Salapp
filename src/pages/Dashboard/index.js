import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import OrderTile from '../../components/OrderTile';

import {
  Container,
  PageCard,
  TitleContainer,
  Subtitle,
  UseName,
  ContentHeaderContainer,
  ContentHeader,
  ContentNumber,
  ContentText,
  AddButton,
  RecentOrdersHeader,
  TitleContent,
  IndicatorContainer,
  IdicatorIconContainer,
  IndicatorText,
  RecentOrders,
  RoudedButton,
  RoudedButtonText,
  OrdersList,
} from './styles';

const Dashboard = ({ navigation }) => {
  function handleNewOrder() {
    navigation.navigate('Order');
  }

  function handleOrderList() {
    navigation.navigate('ProductList');
  }

  return (
    <Container>
      <PageCard>
        <TitleContainer>
          <Subtitle>WELCOME</Subtitle>
          <UseName>Ricardo</UseName>
        </TitleContainer>

        <ContentHeaderContainer>
          <ContentHeader>
            <ContentNumber>36</ContentNumber>
            <ContentText>pedidos</ContentText>
          </ContentHeader>

          <ContentHeader>
            <ContentNumber>11</ContentNumber>
            <ContentText>novos</ContentText>
          </ContentHeader>

          <Icon name="send" size={30} color="#000" />

          <AddButton title="" onPress={handleNewOrder}>
            <Icon name="add" size={30} color="#fff" />
          </AddButton>
        </ContentHeaderContainer>
      </PageCard>

      <PageCard>
        <TitleContent>Pedidos Recentes</TitleContent>
        <RecentOrdersHeader>
          <IndicatorContainer>
            <IdicatorIconContainer>
              <Icon name="check" size={35} color="#fff" />
            </IdicatorIconContainer>
            <IndicatorText>aprovados</IndicatorText>
          </IndicatorContainer>

          <IndicatorContainer>
            <IdicatorIconContainer>
              <Icon name="date-range" size={35} color="#fff" />
            </IdicatorIconContainer>
            <IndicatorText>faturados</IndicatorText>
          </IndicatorContainer>

          <IndicatorContainer>
            <RoudedButton onPress={handleOrderList}>
              <RoudedButtonText>todos</RoudedButtonText>
            </RoudedButton>
          </IndicatorContainer>
        </RecentOrdersHeader>

        <RecentOrders>
          <TitleContent>Pedidos Recentes</TitleContent>
          <OrdersList>
            <OrderTile
              title="Pedido 2209"
              subtitle="empacotado * 3 dias atrás"
            />
            <OrderTile
              title="Pedido 2209"
              subtitle="empacotado * 3 dias atrás"
            />
            <OrderTile
              title="Pedido 2209"
              subtitle="empacotado * 3 dias atrás"
            />
            <OrderTile
              title="Pedido 2209"
              subtitle="empacotado * 3 dias atrás"
            />
            <OrderTile
              title="Pedido 2209"
              subtitle="empacotado * 3 dias atrás"
            />
            <OrderTile
              title="Pedido 2209"
              subtitle="empacotado * 3 dias atrás"
            />
            <OrderTile
              title="Pedido 2209"
              subtitle="empacotado * 3 dias atrás"
            />
            <OrderTile
              title="Pedido 2209"
              subtitle="empacotado * 3 dias atrás"
            />
          </OrdersList>
        </RecentOrders>
      </PageCard>
    </Container>
  );
};

export default Dashboard;
