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
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
