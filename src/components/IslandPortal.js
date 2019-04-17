import React, { Component } from 'react';
import {
  Viro3DObject,
  Viro360Image,
  ViroPortal,
  ViroPortalScene
} from 'react-viro';

export default class IslandPortal extends Component {
  render() {
    return(
      <ViroPortalScene
        passable={true}
        dragType='FixedDistance'
        onDrag={()=>{}}
      >
        <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
          <Viro3DObject
            type='VRX'
            source={require('../assets/portal/portal_ship.vrx')}
            resources={[require('../assets/portal/portal_ship_diffuse.png'),
                        require('../assets/portal/portal_ship_normal.png'),
                        require('../assets/portal/portal_ship_specular.png')]}
          />
        </ViroPortal>

        <Viro360Image source={require('../assets/island/360_island.jpg')} />

      </ViroPortalScene>
    );
  }
}