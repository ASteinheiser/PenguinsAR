import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroText,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
} from 'react-viro';

export default class PenguinSceneAR extends Component {
  constructor() {
    super();
    this.state = {
      text: "Initializing AR..."
    };
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={() => this.setState({text: 'Penguins!'})}>
        <ViroText
          text={this.state.text}
          scale={[.1, .1, .1]}
          height={1}
          width={4}
          position={[0, .5, -1]}
          style={styles.textStyle} />

        <ViroAmbientLight color={"#eeeeee"} />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0,-1,-.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true} />

        <Viro3DObject
          source={require('../assets/pixel-penguin/SM_Penguin_Emperor.obj')}
          position={[0, 0, -1.5]}
          scale={[.15, .15, .15]}
          type='OBJ'
          dragType='FixedToWorld'
          onDrag={()=>{}}
          onError={console.log}
        />

        <Viro3DObject
          source={require('../assets/linux-penguin/Linux_Penguin.obj')}
          position={[0, 0, -1]}
          scale={[.02, .02, .02]}
          type='OBJ'
          dragType='FixedToWorld'
          onDrag={()=>{}}
          onError={console.log}
        />

      </ViroARScene>
    );
  }
};

var styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});