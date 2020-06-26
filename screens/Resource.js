import * as React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Linktab from './linktab';
import Home from './Home1';
import Watch from './Video';
import Main from './file4';
import PDFExample from './pdf';
import {createStackNavigator} from '@react-navigation/stack';

const Stacker = createStackNavigator();
function videoScreen() {
  return (
    <Stacker.Navigator>
      <Stacker.Screen name="homes" component={Home} />
      <Stacker.Screen name="watchvideos" component={Watch} />
    </Stacker.Navigator>
  );
}

function pdfScreen() {
  return (
    <Stacker.Navigator>
      <Stacker.Screen name="main" component={Main} />
      <Stacker.Screen name="watchpdf" component={PDFExample} />
    </Stacker.Navigator>
  );
}

function linkScreen() {
  return (
    <View style={{flex: 1}}>
      <Linktab />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function Resource() {
  return (
    <Tab.Navigator
      initialRouteName="video"
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'white',
        labelStyle: {fontSize: 12},
        style: {backgroundColor: '#66b2E9', borderRadius: 5},
      }}>
      <Tab.Screen
        name="video"
        component={videoScreen}
        options={{tabBarLabel: 'Video'}}
      />
      <Tab.Screen
        name="pdf"
        component={pdfScreen}
        options={{tabBarLabel: 'pdf'}}
      />
      <Tab.Screen
        name="link"
        component={linkScreen}
        options={{tabBarLabel: 'link'}}
      />
    </Tab.Navigator>
  );
}
export default Resource;
