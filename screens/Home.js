import 'react-native-gesture-handler';
import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  Alert,
  CheckBox,
} from 'react-native';
import Category from '../components/courses';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Tab from '../components/tabnavigator';

class Mycourses extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{width: wp('100%'), height: hp('100%')}}>
        <StatusBar hidden />

        <ScrollView>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0, 1]}
            colors={['#A8EDEA', '#FED6E3']}
            style={{
              width: wp('100%'),
              height: hp('21.8%'),
            }}>
            <Text
              style={{
                fontSize: 14,
                marginTop: hp('5.6%'),
                marginLeft: wp('5.2%'),
                fontWeight: '500',
              }}>
              Welcome to TechTable,
            </Text>
            <Text
              style={{fontSize: 14, fontWeight: '500', marginLeft: wp('5.2%')}}>
              Srinivas Teja
            </Text>
          </LinearGradient>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: wp('4.4%'),
                marginTop: hp('3%'),
                fontSize: 14,
              }}>
              All Courses
            </Text>
            <View style={{marginTop: hp('1.5%')}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Category
                  source={require('../image/ML.png')}
                  name="Machine Learning"
                  navigation={navigation}
                  page="description"
                />
                <Category
                  source={require('../image/DM.png')}
                  name="Deep Learning"
                  navigation={navigation}
                  page="descriptiondl"
                />
                <Category
                  source={require('../image/Datascience2.png')}
                  name="E-commerce"
                  navigation={navigation}
                />
              </ScrollView>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: wp('4.4%'),
                  marginTop: hp('3%'),
                  fontSize: 14,
                }}>
                Trending Courses
              </Text>
              <View style={{marginTop: hp('1.5%')}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Category
                    source={require('../image/ML.png')}
                    name="Accounting"
                    navigation={navigation}
                  />
                  <Category
                    source={require('../image/DM.png')}
                    name="Business"
                    navigation={navigation}
                  />
                  <Category
                    source={require('../image/Datascience2.png')}
                    name="E-commerce"
                    navigation={navigation}
                  />
                </ScrollView>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: wp('4.4%'),
                  marginTop: hp('3%'),
                  fontSize: 14,
                }}>
                Management Courses
              </Text>
              <View style={{marginTop: hp('1.5%')}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Category
                    source={require('../image/ML.png')}
                    name="Accounting"
                    navigation={navigation}
                  />
                  <Category
                    source={require('../image/DM.png')}
                    name="Business"
                    navigation={navigation}
                  />
                  <Category
                    source={require('../image/Datascience2.png')}
                    name="E-commerce"
                    navigation={navigation}
                  />
                </ScrollView>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: wp('4.4%'),
                  marginTop: hp('3%'),
                  fontSize: 14,
                }}>
                Top Rated Courses
              </Text>
              <View style={{marginTop: hp('1.5%')}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Category
                    source={require('../image/ML.png')}
                    name="Accounting"
                    navigation={navigation}
                  />
                  <Category
                    source={require('../image/DM.png')}
                    name="Business"
                    navigation={navigation}
                  />
                  <Category
                    source={require('../image/Datascience2.png')}
                    name="E-commerce"
                    navigation={navigation}
                  />
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.navbar}>
          <Tab navigation={navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgcontainer: {
    width: wp('100%'),
    height: hp('0%'),
    flex: 1,
  },
  imgWrapper: {
    borderWidth: 0.3,
    width: wp('100%'),
    height: hp('22.6%'),
    borderRadius: 20,
  },
  navbar: {marginBottom: hp('2%')},
});
export default Mycourses;
