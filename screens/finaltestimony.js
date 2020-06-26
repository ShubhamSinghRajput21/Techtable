import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Homegame from './testimony';
import Watching from './testimonyvideo';

const Stacker = createStackNavigator();
function videoScreen() {
  return (
    <Stacker.Navigator>
      <Stacker.Screen name="Testimony" component={Homegame} />
      <Stacker.Screen name="Testimony Videos" component={Watching} />
    </Stacker.Navigator>
  );
}
export default videoScreen;
