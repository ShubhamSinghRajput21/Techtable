import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Category extends Component {
  render() {
    const {navigation} = this.props;
    const {page} = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.push(page)}>
          <Image source={this.props.source} style={{marginLeft: wp('3.3%')}} />
        </TouchableOpacity>
        <Text style={{marginLeft: wp('3.3%'), fontSize: 12}}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Category;
