import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroScene,
  ViroText,
  Viro360Image,
} from 'react-viro';

export default class HelloWorldSceneVR extends Component {
  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./assets/guadalupe_360.jpg')} />
        <ViroText
          text="Welcome to Guadalupe!"
          width={2}
          height={2}
          position={[0, 0, -2]}
          style={styles.textStyle} />
      </ViroScene>
    );
  }
}

var styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});