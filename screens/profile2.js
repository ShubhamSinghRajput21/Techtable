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

class Profile2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'john@gmail.com',
      phone: '9843643229',
      gender: 'Male',
      dob: '10/4/1997',
      college: 'Amity University',
    };
  }
  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.header}>
            <StatusBar backgroundColor="#000000" />
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txt1}>Edit Profile</Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Red Hat Display',
                    marginTop: hp('6.2%'),
                    marginLeft: wp('27%'),
                    color: '#ffffff',
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.photo}>
              <Image
                source={require('../image/images.jpg')}
                style={styles.imgWrapper}
              />
            </View>
            <Icon
              name="camera"
              size={30}
              color="#ff0000"
              style={{
                position: 'absolute',
                marginLeft: wp('59.4%'),
                marginTop: hp('24.8%'),
              }}
            />
          </View>
          <Text style={styles.txt2}>Name</Text>
          <TextInput
            style={styles.input}
            name="name"
            onChangeText={name => {
              this.setState({name});
            }}>
            {this.state.name}
          </TextInput>
          <Text style={styles.txt2}>Phone</Text>
          <TextInput
            style={styles.input}
            name="phone"
            onChangeText={Phone => {
              this.setState({Phone});
            }}>
            {this.state.phone}
          </TextInput>
          <Text style={styles.txt2}>Gender</Text>
          <TextInput
            style={styles.input}
            name="Gender"
            onChangeText={gender => {
              this.setState({gender});
            }}>
            {this.state.gender}
          </TextInput>
          <Text style={styles.txt2}>Date Of Birth</Text>
          <TextInput
            style={styles.input}
            name="DOB"
            onChangeText={dob => {
              this.setState({dob});
            }}>
            {this.state.dob}
          </TextInput>
          <Text style={styles.txt2}>College</Text>
          <TextInput
            style={styles.input}
            name="college"
            onChangeText={college => {
              this.setState({college});
            }}>
            {this.state.college}
          </TextInput>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: wp('100%'),
    height: hp('40%'),
    backgroundColor: '#000000',
  },
  imgWrapper: {
    width: wp('31.3%'),
    height: hp('17.8%'),
    borderRadius: 57,
  },
  txt1: {
    fontSize: 14,
    fontFamily: 'Red Hat Display',
    marginTop: hp('6.2%'),
    marginLeft: wp('41%'),
    color: '#ffffff',
  },
  photo: {
    backgroundColor: '#ffffff',
    width: wp('31.3%'),
    height: hp('17.8%'),
    marginTop: hp('3.9%'),
    marginLeft: wp('34.4%'),
    borderWidth: 0.5,
    borderRadius: 57,
  },
  input: {
    width: wp('86%'),
    height: hp('7%'),
    marginLeft: wp('6.5%'),
    paddingLeft: wp('4%'),
    marginBottom: hp('0.5%'),
    borderRadius: 10,
    fontStyle: 'normal',
    fontSize: 16,
    borderBottomWidth: 0.5,
  },
  txt2: {
    color: '#adad85',
    marginLeft: wp('10.5%'),
    marginTop: hp('2%'),
  },
});

export default Profile2;
