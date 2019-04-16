import React, { Component } from 'react';
import { ViroARSceneNavigator } from 'react-viro';
import PenguinScene from './scenes/PenguinSceneAR';

const config = {
  apiKey: 'D6EF1F59-F0F4-4E13-B48E-FB5C578E2CEB',
};

export default class App extends Component {
  render() {
    return(
      <ViroARSceneNavigator
        {...config}
        initialScene={{scene: PenguinScene}} />
    );
  }
}