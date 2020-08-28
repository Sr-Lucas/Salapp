import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { Provider as PapaerProvider } from 'react-native-paper';

import App from './App';

function Index() {
  return (
    <PapaerProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <App />
    </PapaerProvider>
  );
}

export default Index;
