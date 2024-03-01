import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Root } from './navigation/Root';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App

const styles = StyleSheet.create({})