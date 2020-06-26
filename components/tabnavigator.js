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
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';
import {BoxShadow} from 'react-native-shadow';
import Icon from 'react-native-vector-icons/FontAwesome';

const shadowOpt = {
  width: wp('81.9%'),
  height: hp('8.4%'),
  color: '#000000',
  border: 2,
  radius: 10,
  opacity: 0.2,
  x: wp('9.05%'),
  y: hp('0.5%'),
  style: {marginTop: hp('2%')},
};
function Tab({navigation}) {
  return (
    <View>
      <BoxShadow setting={shadowOpt}>
        <View style={styles.tabWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Icon name="home" size={25} color="#156CEE" />
              <Text
                style={{
                  fontSize: 12,
                }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('allcourses')}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Icon name="play-circle" size={25} color="#156CEE" />
              <Text
                style={{
                  fontSize: 12,
                }}>
                MyCourses
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('testimony')}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Icon name="book" size={25} color="#156CEE" />
              <Text
                style={{
                  fontSize: 12,
                }}>
                Testimony
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('settings')}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Icon name="cog" size={25} color="#156CEE" />
              <Text
                style={{
                  fontSize: 12,
                }}>
                Settings
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </BoxShadow>
    </View>
  );
}

const styles = StyleSheet.create({
  tabWrapper: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp('81.9%'),
    height: hp('8.4%'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#66B2E9',
    marginLeft: wp('9.05%'),
  },
});

export default Tab;
