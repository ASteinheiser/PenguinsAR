import React, { Component } from 'react';
import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight
} from 'react-viro';
import IslandPortal from '../components/IslandPortal';

export default class PenguinSceneAR extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Initializing AR...',
      pixelPenguin: {
        scale: [.15, .15, .15],
        rotation: [0, 0, 0]
      },
      linuxPenguin: {
        scale: [.02, .02, .02],
        rotation: [0, 0, 0]
      }
    };
  }

  handlePinch(pinchState, scaleFactor, source) {
    console.log({pinchState})
    console.log({scaleFactor})
    console.log({source})
    if(pinchState == 3) {
    // update scale of obj by multiplying by scaleFactor  when pinch ends.
      return;
    }
    //set scale using native props to reflect pinch.
  }

  handleRotate(rotateState, rotationFactor, source) {
    console.log({rotateState})
    console.log({rotationFactor})
    console.log({source})
    if (rotateState == 3) {
      //set to current rotation - rotationFactor.
      return;
    }
    //update rotation using setNativeProps
  }

  render() {
    const { linuxPenguin, pixelPenguin } = this.state;
    return (
      <ViroARScene
        onTrackingUpdated={() => this.setState({text: 'Penguins!'})}>

        <IslandPortal />

        <ViroAmbientLight color={'#eeeeee'} intensity={200} />

        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0,-1,-.2]}
          position={[0, 3, 1]}
          color='#ffffff'
          castsShadow={true} />

        <Viro3DObject
          source={require('../assets/pixel-penguin/SM_Penguin_Emperor.obj')}
          position={[0, 0, 1]}
          scale={pixelPenguin.scale}
          rotation={pixelPenguin.rotation}
          type='OBJ'
          dragType='FixedToWorld'
          onDrag={()=>{}}
          onError={console.log}
          highAccuracyEvents
          onPinch={this.handlePinch}
          onRotate={this.handleRotate}
        />

        <Viro3DObject
          source={require('../assets/linux-penguin/Linux_Penguin.obj')}
          position={[0, 0, -1]}
          scale={linuxPenguin.scale}
          rotation={linuxPenguin.rotation}
          type='OBJ'
          dragType='FixedToWorld'
          onDrag={()=>{}}
          onError={console.log}
          highAccuracyEvents
          onPinch={this.handlePinch}
          onRotate={this.handleRotate}
        />

      </ViroARScene>
    );
  }
};