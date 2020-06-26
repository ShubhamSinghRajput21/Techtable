import React, {useState, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Button,
  StatusBar,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import validateRegisterInput from '../Validation/register';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobile: '',
      password: '',
      toggleCheckBox: false,
      errors: {},
    };
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton() {
    const data = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      password: this.state.password,
    };
    const {errors, isValid} = validateRegisterInput(data);
    this.setState({errors});
    if (isValid) {
      Alert.alert(
        'Signup Succesfull',
        'Name:' +
          data.name +
          '\n' +
          'Email:' +
          data.email +
          '\n' +
          'Mobile:' +
          data.mobile +
          '\n' +
          'Password:' +
          data.password,
        [
          {
            text: 'Ok',
            onPress: () => {
              this.props.navigation.navigate('home');
            },
          },
        ],
      );
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
            source={require('../image/img2.png')}
            style={styles.imgWrapper}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChangeText={name => this.setState({name})}
          />
          {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}
          <TextInput
            style={styles.textInput2}
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
          {errors.email ? (
            <Text style={styles.error}>{errors.email}</Text>
          ) : null}
          <TextInput
            style={styles.textInput2}
            placeholder="Mobile"
            name="mobile"
            value={this.state.mobile}
            onChangeText={mobile => this.setState({mobile})}
          />
          {errors.mobile ? (
            <Text style={styles.error}>{errors.mobile}</Text>
          ) : null}
          <TextInput
            style={styles.textInput2}
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
          {errors.password ? (
            <Text style={styles.error}>{errors.password}</Text>
          ) : null}
          <View style={{flexDirection: 'row'}}>
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
              <Text
                style={{
                  fontSize: 12,
                }}>
                Remember my account
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            onPress={this.onPressButton}>
            <Text style={styles.TextStyle}>Sign up</Text>
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
                marginTop: hp('3.12%'),
              }}
            />
            <Image
              source={require('../image/Frame.png')}
              style={{
                width: wp('8.33%'),
                height: hp('4.68%'),
                marginLeft: wp('9.4%'),
                marginTop: hp('4.5%'),
              }}
            />
            <Image
              source={require('../image/Github.png')}
              style={{
                width: wp('8.33%'),
                height: hp('4.68%'),
                marginLeft: wp('12.77%'),
                marginTop: hp('4.3%'),
              }}
            />
          </View>
          <View style={styles.txtWrapper3}>
            <Text
              style={{
                fontSize: 12,
              }}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text style={{color: '#1e90ff', fontSize: 12}}>Login</Text>
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
    width: wp('100%'),
    height: hp('27.9%'),
    borderWidth: 0.3,
    borderRadius: 20,
  },
  textInput: {
    width: wp('82.2%'),
    height: hp('6.8%'),
    marginHorizontal: wp('8.8%'),
    marginTop: hp('1.4%'),
    backgroundColor: '#FFFFFF',
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: '#000000',
    color: '#000000',
  },
  textInput2: {
    width: wp('82.2%'),
    height: hp('6.8%'),
    marginHorizontal: wp('8.8%'),
    marginTop: hp('2%'),
    backgroundColor: '#FFFFFF',
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: '#000000',
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
  SubmitButtonStyle: {
    width: wp('26.66%'),
    height: hp('4.68%'),
    marginHorizontal: wp('36.6%'),
    marginTop: hp('2.34%'),
    backgroundColor: '#156CEE',
    borderRadius: 10,
    borderColor: '#fff',
  },
  txtWrapper2: {
    width: wp('71.67%'),
    height: hp('4.2%'),
    marginTop: hp('3.75%'),
    marginLeft: wp('14.17%'),
  },
  txtWrapper3: {
    flexDirection: 'row',
    width: wp('59.16%'),
    height: hp('3.75%'),
    marginTop: hp('2%'),
    marginLeft: wp('23.2%'),
  },
  TextStyle: {
    color: '#ffffff',
    marginLeft: wp('5.5%'),
    marginTop: hp('0.9%'),
    fontSize: 14,
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

export default SignupScreen;
