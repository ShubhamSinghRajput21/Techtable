import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
// import {SafeAreaView} from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const URL = 'https://reactnativeforyou.com';
const URL1 = 'https://www.google.com';

// create a component

class Linktab extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.txtwrap}>
          <Text
            style={(style = styles.txtwrap1)}
            onPress={() => {
              Linking.openURL(URL);
            }}>
            {URL}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.txtwrap}>
          <Text
            style={(style = styles.txtwrap1)}
            onPress={() => {
              Linking.openURL(URL1);
            }}>
            {URL1}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    //flex: 1,

    marginTop: 5,
  },

  txtwrap: {
    borderColor: '#66b2E9',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: 'white',
    width: wp('95%'),
    height: hp('10%'),
  },
  txtwrap1: {
    padding: 12,
    fontSize: 18,
    //height: 90,
    //fontColor:'whit'
    //color:'black'
  },
});

//make this component available to the app
export default Linktab;
