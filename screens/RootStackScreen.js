import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
// import SignupScreen from './SignupScreen';
// import SigninScreen from './SinginScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.screen name="SplashScreen" component={SplashScreen} />
      {/* <RootStack.screen name="SignupScreen" component={SignupScreen} />
    <RootStack.screen name="SigninScreen" component={SigninScreen} /> */}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
