import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  Button,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Main extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.txtwrap}>
          <Text style={styles.txtwrap1} onPress={() => navigate('watchpdf')}>
            PDF1
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 25,
    padding: 20,
    fontWeight: '100',
  },
});

export default Main;
