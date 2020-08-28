import React from 'react';

import { NavigationContainer, Link } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import TabRoutes from './tabRoutes';
import Order from './pages/Order';
import ProductList from './pages/ProductList';
import BuyCart from './pages/BuyCart';
import FinishPurchase from './pages/FinishPurchase';

const Stack = createStackNavigator();

const Routes = ({ isSignedIn = false }) => {
  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Stack.Navigator headerMode={false} initialRouteName="SignIn">
          <Stack.Screen component={SignIn} name="SignIn" />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            component={TabRoutes}
            name="TabRoutes"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={Order}
            name="Order"
            options={{ title: 'Novo Pedido' }}
          />
          <Stack.Screen
            component={ProductList}
            name="ProductList"
            options={{
              title: 'Lista de Produtos',
              headerRight: () => (
                <Link
                  to="/BuyCart"
                  style={{
                    color: '#1565C0',
                    marginRight: 10,
                  }}
                >
                  Próximo
                </Link>
              ),
            }}
          />
          <Stack.Screen
            component={BuyCart}
            name="BuyCart"
            options={{
              title: 'Carrinho de compras',
              headerRight: () => (
                <Link
                  to="/FinishPurchase"
                  style={{
                    color: '#1565C0',
                    marginRight: 10,
                  }}
                >
                  Finalizar
                </Link>
              ),
            }}
          />
          <Stack.Screen
            component={FinishPurchase}
            name="FinishPurchase"
            options={{
              title: 'Finalizar Compra',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
