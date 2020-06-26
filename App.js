import 'react-native-gesture-handler';
import React, {useState, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Image,
  StatusBar,
} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Header from './components/Header';
// import ListItem from './components/ListItem';
// import AddItem from './components/AddItem'
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import description from './screens/Description';
import Profile from './screens/settings';
import Profile2 from './screens/profile2';
import Assignment from './screens/Assignment';
import Tab from './components/tabnavigator';
import Mycourses from './screens/Home';
import Resource from './screens/Resource';
import Descriptiondl from './screens/description2';
// import RootStackScreen from './screens/RootStackScreen';
import AppIntroSlider from 'react-native-app-intro-slider';
import AllCourses from './screens/Allcourses';
import videoScreen from './screens/finaltestimony';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  _onDone = () => {
    this.setState({showRealApp: true});
  };
  _onSkip = () => {
    this.setState({showRealApp: true});
  };

  _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <StatusBar hidden />
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  render() {
    const Stack = createStackNavigator();
    if (this.state.showRealApp) {
      return (
        <NavigationContainer>
          <Stack.Navigator headerMode="none" initialRouteName="Signin">
            <Stack.Screen name="resource" component={Resource} />
            <Stack.Screen name="home" component={Mycourses} />
            <Stack.Screen name="description" component={description} />
            <Stack.Screen name="testimony" component={videoScreen} />
            <Stack.Screen name="tab" component={Tab} />
            <Stack.Screen name="allcourses" component={AllCourses} />
            <Stack.Screen name="descriptiondl" component={Descriptiondl} />
            <Stack.Screen name="assignment" component={Assignment} />
            <Stack.Screen name="settings" component={Profile} />
            <Stack.Screen name="profile2" component={Profile2} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <AppIntroSlider
          data={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
          doneLabel={' Get Started'}
          bottomButton
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Connecting Engineers to Opportunities ',
    title: 'TechTable',
    image: {
      uri:
        'https://res.cloudinary.com/joeydash/image/upload/v1581611607/Techtable/ugno5c0zd4thcgc4lyt1.png',
    },
    backgroundColor: '#1fdbdb',
  },
  {
    key: 's2',
    title: 'Interships',
    text:
      'Browse through internships offered by 100,000+ companies in various profiles and locations all across India',
    image: {
      uri: 'https://static.thenounproject.com/png/2120616-200.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'One to One Mentorship',
    text:
      ' The One-to-One Program can help you manage risk, receive feedback, develop your capabilities and skills, and achieve your goals.',
    image: {
      uri: 'https://static.thenounproject.com/png/2324119-200.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Live Sessions',
    text: ' Learn more with Live Sessions and interact with other users .',
    image: {
      uri: 'https://static.thenounproject.com/png/326101-200.png',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Peer Learning',
    text: ' Helps make learning much more engaging and relatable.',
    image: {
      uri: 'https://static.thenounproject.com/png/27478-200.png',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Practical Learning With Projects',
    text: ' Engage in unique and industry related projects with mentors ',
    image: {
      uri: 'https://static.thenounproject.com/png/2608604-200.png',
    },
    backgroundColor: '#febe29',
  },
];

export default App;
