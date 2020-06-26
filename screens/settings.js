import React, {Component} from 'react';
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
import {BoxShadow} from 'react-native-shadow';
import Tab from '../components/tabnavigator';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends Component {
  render() {
    const shadowOpt = {
      width: wp('79.1%'),
      height: hp('7%'),
      color: '#000000',
      radius: 10,
      opacity: 0.2,
      x: wp('10.5%'),
      y: hp('0.6%'),
      style: {marginTop: hp('5%')},
    };
    const shadowOpt2 = {
      width: wp('79.1%'),
      height: hp('7%'),
      color: '#000000',
      radius: 10,
      opacity: 0.2,
      x: wp('10.5%'),
      y: hp('0.6%'),
      style: {marginTop: hp('2.1%')},
    };
    const {navigation} = this.props;
    return (
      <View>
        <View style={styles.body}>
          <StatusBar hidden />
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0, 1]}
            colors={['#FFFEFF', '#D7FFFE']}
            style={styles.lineargradient}>
            <Text style={styles.txt1}>Settings</Text>
            {/* <View style={styles.photo} />
            <Icon
              name="camera"
              size={30}
              color="#000000"
              style={{
                position: 'absolute',
                marginLeft: wp('59.4%'),
                marginTop: hp('24.8%'),
              }}
            /> */}

            <BoxShadow setting={shadowOpt}>
              <View style={styles.input}>
                <TouchableOpacity>
                  <Text style={{marginLeft: wp('3.8%'), marginTop: hp('2%')}}>
                    Change Email id
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon
                    name="chevron-right"
                    size={14}
                    color="#ff0066"
                    style={{marginLeft: wp('36%'), marginTop: hp('2.5%')}}
                  />
                </TouchableOpacity>
              </View>
            </BoxShadow>
            <BoxShadow setting={shadowOpt2} style={{marginTop: hp('5%')}}>
              <View style={styles.input2}>
                <TouchableOpacity>
                  <Text style={{marginLeft: wp('3.8%'), marginTop: hp('2%')}}>
                    Change Password
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="chevron-right"
                    size={14}
                    color="#ff0066"
                    style={{marginLeft: wp('33%%'), marginTop: hp('2.5%')}}
                  />
                </TouchableOpacity>
              </View>
            </BoxShadow>
            <BoxShadow setting={shadowOpt2}>
              <View style={styles.input2}>
                <TouchableOpacity>
                  <Text style={{marginLeft: wp('3.8%'), marginTop: hp('2%')}}>
                    My Purchases
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Icon
                    name="chevron-right"
                    size={14}
                    color="#ff0066"
                    style={{marginLeft: wp('40%'), marginTop: hp('2.5%')}}
                  />
                </TouchableOpacity>
              </View>
            </BoxShadow>
            <BoxShadow setting={shadowOpt2}>
              <View style={styles.input2}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('profile2')}>
                  <Text style={{marginLeft: wp('3.8%'), marginTop: hp('2%')}}>
                    Edit Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('profile2')}>
                  <Icon
                    name="chevron-right"
                    size={14}
                    color="#ff0066"
                    style={{marginLeft: wp('45%'), marginTop: hp('2.5%')}}
                  />
                </TouchableOpacity>
              </View>
            </BoxShadow>
            <BoxShadow setting={shadowOpt2}>
              <View style={styles.input2}>
                <TouchableOpacity>
                  <Text style={{marginLeft: wp('3.8%'), marginTop: hp('2%')}}>
                    Logout
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="chevron-right"
                    size={14}
                    color="#ff0066"
                    style={{marginLeft: wp('52%'), marginTop: hp('2.5%')}}
                  />
                </TouchableOpacity>
              </View>
            </BoxShadow>
            <View style={styles.rembod}>
              <Tab navigation={navigation} />
            </View>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    width: wp('100%'),
    height: hp('100%'),
  },
  lineargradient: {flex: 1},
  txt1: {
    fontSize: 24,
    fontFamily: 'Red Hat Display',
    marginTop: hp('6.2%'),
    marginLeft: wp('39.4%'),
  },
  input: {
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: wp('79.1%'),
    height: hp('7%'),
    marginLeft: wp('10%'),
    borderWidth: 0.7,
    borderRadius: 10,
    borderColor: '#000000',
  },
  input2: {
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: wp('79.1%'),
    height: hp('7%'),
    marginLeft: wp('10%'),
    borderWidth: 0.7,
    borderRadius: 10,
    borderColor: '#000000',
  },

  rembod: {
    marginTop: hp('12%'),
    paddingTop: hp('15.5%'),
  },
});

export default Profile;
