import React, {useState, Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Keys} from '../config/keys';

class WelcomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar hidden />
          <Image
            style={styles.imgWrapper}
            source={require('../image/welcome.png')}
          />
          <Text />
          <View>
            <Text
              style={{
                fontSize: 29,
                lineHeight: 38,
                color: '#000000',
                textAlign: 'center',
              }}>
              {Keys.CompanyName}
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.txtWrapper}>
            <Text
              style={{
                fontSize: 16,
                fontStyle: 'normal',
                textAlign: 'center',
                lineHeight: 20,
                color: '#000000',
              }}>
              The platform that enables them to interact with students easily to
              get internships and jobs at the best companies.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            onPress={() => navigation.navigate('settings')}>
            <Text
              style={{
                color: '#ffffff',
                marginLeft: wp('7.7%'),
                marginTop: hp('0.9%'),
                fontSize: 14,
              }}>
              Let's start
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    backgroundColor: '#ffffff',
  },
  imgWrapper: {
    width: wp('100%'),
    height: hp('42.8%'),
  },
  line: {
    width: wp('76.3%'),
    height: 0,
    marginLeft: wp('11.6%'),
    borderBottomWidth: 0.5,
  },
  SubmitButtonStyle: {
    width: wp('33.05%'),
    height: hp('4.68%'),
    marginLeft: wp('32.7%'),
    marginTop: hp('0.01%'),
    backgroundColor: '#156CEE',
    borderRadius: 10,
  },
  txtWrapper: {
    width: wp('100%'),
    height: hp('12.9%'),
    marginTop: hp('3.75%'),
  },
});

export default WelcomeScreen;
