import React from 'react';
import { AppRegistry, View } from 'react-native';
import App from './src/App';

const whatsappClone = props => (
  <View style={{flex: 1}}>
    <App />
  </View>
)

AppRegistry.registerComponent('whatsappClone', () => whatsappClone);
