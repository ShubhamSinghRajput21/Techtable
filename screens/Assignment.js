import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  StatusBar,
  SectionList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
//import Constants from 'expo-constants';
//import search from './images/search.png';
import {ScrollView} from 'react-native-gesture-handler';
import {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tab from '../components/tabnavigator';
import {BoxShadow} from 'react-native-shadow';

const DATA = [
  {
    id: 'Data-Science',
    title: 'Assignment-1',
  },
  {
    id: 'Machine-Learning',
    title: 'Assignment-2',
  },
  {
    id: 'Digital-Learning',
    title: 'Assignment-3',
  },
];
const shadowOpt = {
  width: wp('87.7%'),
  height: hp('8.1%'),
  color: '#000000',
  radius: 5,
  opacity: 0.2,
  x: wp('7%'),
  y: hp('-0.6%'),
  style: {marginTop: hp('2%')},
};

function Item({id, title, selected, onSelect}) {
  return (
    <ScrollView>
      <BoxShadow setting={shadowOpt}>
        <View style={styles.item}>
          <Image source={require('../image/Datascience.png')} />
          <View>
            <View style={styles.title}>
              <Text style={{fontSize: 10}}>{title}</Text>
            </View>
            <View style={styles.texttab1}>
              <Text style={{fontSize: 10}}> {id} </Text>
            </View>
            <View style={styles.SubmitButtonStyle}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 8,
                }}>
                Open
              </Text>
            </View>
          </View>
        </View>
      </BoxShadow>
    </ScrollView>
  );
}

export default function Assignment({navigation}) {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar hidden />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: hp('10%'),
          height: hp('3.9%'),
          marginLeft: hp('4%'),
          marginTop: hp('4.8%'),
          borderRadius: 5,
          backgroundColor: '#585E92',
        }}>
        <Text style={{fontSize: 14, color: '#ffffff'}}>All</Text>
        <Icon name="caret-down" size={20} color="#ffffff" />
      </View>

      <Icon
        name="search"
        size={17}
        color="#000000"
        style={{
          position: 'absolute',
          marginLeft: wp('87.2%'),
          marginTop: hp('5%'),
        }}
      />
      <View style={styles.linewrapper} />

      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
      <View style={{marginBottom: hp('2.1%')}}>
        <Tab navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  flatassign: {
    marginTop: 10,
    //marginTop
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 2,
    marginLeft: wp('6%'),
    borderRadius: 5,
    borderWidth: 1,
    width: wp('87.7%'),
    height: hp('8.1%'),
    // justifyContent:'space-around'
  },
  title: {
    width: wp('47.2%'),
    height: hp('1.5%'),
    marginLeft: wp('2.7%'),
    marginTop: hp('0.5%'),
  },
  title1: {
    fontSize: 12,
    position: 'absolute',
    width: wp('42%'),
    //height: hp('10%'),
    marginVertical: -15,
    //marginHorizontal: 12,
  },

  imagestab1: {
    width: wp('22%'),
    height: hp('10.5%'),
    marginVertical: 1,
    marginHorizontal: -172.5,
    borderWidth: 1,
    position: 'absolute',
    flexDirection: 'row',
    //alignItems:'baseline'
    //flex:2
  },
  texttab: {
    alignItems: 'center',
    flexDirection: 'column',
    // fontSize: 18,
    position: 'absolute',
    width: wp('33%'),
    //height: hp('100%'),
    marginVertical: 19,
    //marginHorizontal: 12,
    //fontStyle:'normal'
  },

  texttab1: {
    width: wp('55.5%'),
    height: hp('1.5%'),
    marginLeft: wp('2%'),
    marginTop: hp('0.9%'),
  },
  SubmitButtonStyle: {
    width: wp('8.3%'),
    height: hp('1.8%'),
    backgroundColor: '#F4B24D',
    borderRadius: 2,
    marginLeft: wp('2.2%'),
    marginTop: hp('0.9%'),
    paddingLeft: wp('1.6%'),
  },
  linewrapper: {
    width: wp('86.6%'),
    borderWidth: 0.6,
    borderColor: 'black',
    marginTop: hp('0.6%'),
    marginLeft: wp('7%'),
  },
  drop: {
    position: 'absolute',
    width: wp('10%'),
    height: hp('17%'),
    marginHorizontal: 16,
    marginVertical: 15,
  },
  newcontainer: {
    width: 25,
    height: 25,
  },
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp('81.9%'),
    height: hp('8.4%'),
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#66B2E9',
    marginLeft: 40,
    marginTop: 600,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },
});
