import React from 'react';
import logo from './logo.svg';
import './App.css';
import { View } from 'react-native-web';
import Router from './navigation/Router';

const App: React.FC = () => {
  return (
    <View>
      <Router />
    </View>
  );
}

export default App;
