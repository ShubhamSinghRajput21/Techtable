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

// import ExtraDimensions from 'react-native-extra-dimensions-android';
// import ValidationComponent from 'react-native-form-validator';
// import validator from 'validator';
import validateLoginInput from '../Validation/login';

import CheckBox from '@react-native-community/checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// const height = ExtraDimensions.get('REAL_WINDOW_HEIGHT');
// const width = ExtraDimensions.get('REAL_WINDOW_WIDTH');
// const status = ExtraDimensions.get('STATUS_BAR_HEIGHT');

class SigninScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      toggleCheckBox: false,
      errors: {},
    };
    this.onPressButton = this.onPressButton.bind(this);
  }
  onPressButton() {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    const {errors, isValid} = validateLoginInput(data);
    this.setState({errors});
    if (isValid) {
      fetch('http://13.127.136.242:5002/api/v1/auth/userLogin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.email,
          password: this.state.password,
          context: 'PARTNER',
        }),
      })
        .then(response => response.json())
        .then(json => {
          Alert.alert(
            json.message,
            'Email:' +
              data.email +
              [
                {
                  text: 'Ok',
                  onPress: () => {
                    this.props.navigation.navigate('home');
                  },
                },
              ],
          );
        })
        .catch(error => Alert.alert(error.message));
    }
  }

  render() {
    const {errors} = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView>
        <StatusBar hidden />
        <View style={styles.container}>
          <Image
            style={styles.imgWrapper}
            source={require('../image/img1.png')}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChangeText={email => {
              this.setState({email});
            }}
          />
          {errors.email ? (
            <Text style={styles.error}>{errors.email}</Text>
          ) : null}
          <TextInput
            style={styles.input_2}
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChangeText={text => {
              this.setState({password: text});
            }}
          />
          {errors.password ? (
            <Text style={styles.error}>{errors.password}</Text>
          ) : null}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <CheckBox
              style={styles.box}
              disabled={false}
              value={this.state.toggleCheckBox}
              onValueChange={() =>
                this.state.toggleCheckBox
                  ? this.setState({toggleCheckBox: false})
                  : this.setState({toggleCheckBox: true})
              }
            />
            <View style={styles.txtWrapper}>
              <Text style={{fontSize: 12}}>Remember my account</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            onPress={this.onPressButton}>
            <Text style={styles.TextStyle}>Login</Text>
          </TouchableOpacity>
          <View style={styles.txtWrapper2}>
            <Text
              style={{
                fontSize: 10,
                textAlign: 'center',
                color: '#000000',
              }}>
              Enter Details
            </Text>
            <Text
              style={{
                fontSize: 10,
                textAlign: 'center',
                color: '#000000',
              }}>
              or connect with Social media account
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../image/Google.png')}
              style={{
                width: wp('13.33%'),
                height: hp('7.5%'),
                marginLeft: wp('22.5%'),
                marginTop: hp('2.65%'),
              }}
            />
            <Image
              source={require('../image/Frame.png')}
              style={{
                width: wp('8.33%'),
                height: hp('4.68%'),
                marginLeft: wp('9.4%'),
                marginTop: hp('4.06%'),
              }}
            />
            <Image
              source={require('../image/Github.png')}
              style={{
                width: wp('8.33%'),
                height: hp('4.68%'),
                marginLeft: wp('12.77%'),
                marginTop: hp('4.8%'),
              }}
            />
          </View>
          <View style={styles.txtWrapper3}>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 15,
                color: '#000000',
              }}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: '#1e90ff', lineHeight: 15, fontSize: 12}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imgWrapper: {
    borderWidth: 0.3,
    width: wp('100%'),
    height: hp('45.6%'),
    borderRadius: 20,
  },
  input: {
    width: wp('82.2%'),
    height: hp('6.8%'),
    marginLeft: wp('8.8%'),
    borderWidth: 0.3,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  input_2: {
    width: wp('82.2%'),
    height: hp('6.8%'),
    marginLeft: wp('8.8%'),
    marginTop: hp('2%'),
    borderWidth: 0.3,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  box: {
    marginLeft: wp('8.8%'),
    marginTop: hp('1.5%'),
  },
  txtWrapper: {
    width: wp('45.5%'),
    height: hp('2.6%'),
    marginLeft: wp('2.6%'),
    marginTop: hp('2.5%'),
  },
  txtWrapper2: {
    width: wp('71.67%'),
    height: hp('4.2%'),
    marginTop: hp('3.3%'),
    marginLeft: wp('14.17%'),
  },
  SubmitButtonStyle: {
    width: wp('26.66%'),
    height: hp('4.68%'),
    marginHorizontal: wp('36.6%'),
    marginTop: hp('3.43%'),
    backgroundColor: '#156CEE',
    borderRadius: 10,
    borderColor: '#fff',
  },
  TextStyle: {
    color: '#ffffff',
    marginLeft: wp('7.7%'),
    marginTop: hp('0.9%'),
    fontSize: 14,
  },
  txtWrapper3: {
    flexDirection: 'row',
    width: wp('59.16%'),
    height: hp('3.75%'),
    marginTop: hp('2.8%'),
    marginLeft: wp('23.8%'),
  },
  error: {
    position: 'relative',
    color: 'red',
    marginLeft: wp('8.8%'),
    marginTop: hp('0.5%'),
    fontSize: 12,
    fontStyle: 'normal',
  },
});

export default SigninScreen;
