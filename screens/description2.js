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
import {BoxShadow} from 'react-native-shadow';
import Tab from '../components/tabnavigator';

const Descriptiondl = ({navigation}) => {
  return (
    <View style={{width: wp('100%'), height: hp('100%')}}>
      <StatusBar hidden />
      <ScrollView>
        <Image
          source={require('../image/study.png')}
          style={styles.imgWrapper}
        />
        <View
          style={{
            width: wp('44.4%'),
            height: hp('2.6%'),
            marginTop: hp('3.1%'),
            marginLeft: wp('7.4%'),
          }}>
          <Text style={{fontSize: 19}}>Deep Learning</Text>
        </View>
        <View
          style={{
            width: wp('33.8%'),
            height: hp('2.5%'),
            marginTop: hp('1.5%'),
            marginLeft: wp('7.4%'),
          }}>
          <Text style={{fontSize: 14}}>by Srinivas Teja</Text>
        </View>
        <View
          style={{
            width: wp('38.3%'),
            height: hp('2.6%'),
            marginTop: hp('2.8%'),
            marginLeft: wp('7.4%'),
          }}>
          <Text style={{fontSize: 19}}>Description</Text>
        </View>
        <View
          style={{
            width: wp('78.3%'),
            height: hp('8.2%'),
            marginTop: hp('2.1%'),
            marginLeft: wp('7.4%'),
          }}>
          <Text style={{fontSize: 12}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </Text>
        </View>
        <View
          style={{
            width: wp('49.7%'),
            height: hp('2.6%'),
            marginLeft: wp('7.4%'),
          }}>
          <Text style={{fontSize: 18}}>What will you learn?</Text>
        </View>
        {/* <View
          style={{
            width: wp('83.3%'),
            height: hp('5.9%'),
            marginTop: hp('1%'),
            marginLeft: wp('8%'),
            borderWidth: 0.7,
            borderRadius: 5,
          }}
        />
        <View
          style={{
            width: wp('83.3%'),
            height: hp('5.9%'),
            marginTop: hp('1.5%'),
            marginLeft: wp('8%'),
            borderWidth: 0.7,
            borderRadius: 5,
            borderColor: '#000000',
          }}
        /> */}
        <View style={styles.topicContainer}>
          <Text style={{fontSize: 18}}>Week-1</Text>
        </View>
        <View
          style={{
            width: wp('78.3%'),
            marginTop: hp('2.1%'),
            marginLeft: wp('7.4%'),
          }}>
          <Text style={{fontSize: 16}}>Basics of Neural Networks:</Text>
          <Text style={{fontSize: 12}}>
            MP Neuron,Perceptions,MLPs,Representation Power of MP
            neurons,Perceptrons and Neural Networks
          </Text>
        </View>
        <View
          style={{
            width: wp('82%'),
            borderWidth: 0.5,
            marginLeft: wp('6%'),
            marginTop: hp('2%'),
          }}
        />
        <View style={styles.topicContainer}>
          <Text style={{fontSize: 18}}>Week-2</Text>
        </View>
        <View
          style={{
            width: wp('78.3%'),
            marginTop: hp('2.1%'),
            marginLeft: wp('7.4%'),
          }}>
          <Text style={{fontSize: 16}}>Introduction to:</Text>
          <Text style={{fontSize: 12}}>
            Jupyter Notebook,Pytorch/Tensorflow,NN Demo Session,Activation
            functions,Learning Algorithms,Loss Functions,Regularization
            Hyperparameter Tuning,Batch Normalization
          </Text>
        </View>
        <View
          style={{
            width: wp('82%'),
            borderWidth: 0.5,
            marginLeft: wp('6%'),
            marginTop: hp('2%'),
          }}
        />
        <View style={styles.topicContainer}>
          <Text style={{fontSize: 18}}>Week-3</Text>
        </View>
        <View
          style={{
            width: wp('78.3%'),
            marginTop: hp('2.1%'),
            marginLeft: wp('7.4%'),
          }}>
          <Text style={{fontSize: 16}}>CNNs:</Text>
          <Text style={{fontSize: 12}}>
            Convolution Operation, Pooling,Famous CNNs-Alexnet,VSG etc.{'\n '}
          </Text>
          <Text style={{fontSize: 16}}>Localization:</Text>
          <Text style={{fontSize: 12}}>
            Neural Style Transfer{'\n'}CNN Demo Session
          </Text>
        </View>
        <View
          style={{
            width: wp('82%'),
            borderWidth: 0.5,
            marginLeft: wp('6%'),
            marginTop: hp('2%'),
          }}
        />
        <View style={styles.topicContainer}>
          <Text style={{fontSize: 18}}>Week-4</Text>
        </View>
        <View
          style={{
            width: wp('78.3%'),
            marginTop: hp('2.1%'),
            marginLeft: wp('7.4%'),
          }}>
          <Text style={{fontSize: 16}}>Final:</Text>
          <Text style={{fontSize: 12}}>
            RNNs, Word embeddings,GRUs,LSTMs Encoder-Decoder,Mechanism,Attention
            Mechanism Applications,RNN Demo Session
          </Text>
        </View>
        <View
          style={{
            width: wp('82%'),
            borderWidth: 0.5,
            marginLeft: wp('6%'),
            marginTop: hp('2%'),
          }}
        />
        <View style={styles.btnContainer}>
          <View style={styles.ass}>
            <TouchableOpacity onPress={() => navigation.navigate('assignment')}>
              <Text style={styles.btntext}>Assignments</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.res}>
            <TouchableOpacity onPress={() => navigation.navigate('resource')}>
              <Text style={styles.btntext}>Resources</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={{marginBottom: hp('2%')}}>
        <Tab navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrapper: {
    width: wp('100%'),
    height: hp('32.5%'),
  },
  btnContainer: {
    flexDirection: 'row',
    width: wp('83.3%'),
    height: hp('5.9%'),
    marginTop: hp('1.5%'),
    marginLeft: wp('8%'),
    borderRadius: 5,
    borderColor: '#000000',
  },
  ass: {
    width: wp('40%'),
    height: hp('5%'),
    justifyContent: 'center',
    borderWidth: 0.3,
    borderRadius: 10,
    backgroundColor: '#ff0066',
  },
  res: {
    width: wp('40%'),
    height: hp('5%'),
    justifyContent: 'center',
    borderWidth: 0.3,
    borderRadius: 10,
    backgroundColor: '#ff0066',
  },
  btntext: {fontSize: 16, alignSelf: 'center', color: '#ffffff'},
  topicContainer: {
    width: wp('33.8%'),
    height: hp('2.9%'),
    marginLeft: wp('7.4%'),
    marginTop: hp('1%'),
  },
});

export default Descriptiondl;
