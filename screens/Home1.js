import React, {Component, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const MAX_RESULT = 15;
const PLAYLIST_ID = 'PL0zlbb8TTDQJYaZZ_wzWgIJFpZmasocF3';
const API_KEY = 'AIzaSyCdab-bPtxZJ9c-rMZ1ZTB44E5AVjstsl4';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends Component {
  // watchVideo(video_url){
  //   s({video_url: video_url});
  // }
  UNSAFE_componentWillMount() {
    this.fetchPlaylistData();
  }
  fetchPlaylistData = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=${MAX_RESULT}&playlistId=${PLAYLIST_ID}&key=${API_KEY}`,
    );
    const json = await response.json();
    this.setState({videos: json['items']});
    console.log(this.state.videos);
  };
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }
  render() {
    const videos = this.state.videos;
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={this.state.videos}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.demacate}
              onPress={() =>
                navigation.navigate('watchvideos', {
                  video_url: item.contentDetails.videoId,
                })
              }>
              <View style={{flexDirection: 'row', margin: 10, marginBottom: 0}}>
                <Image
                  source={{
                    uri: `https://i.ytimg.com/vi/${
                      item.contentDetails.videoId
                    }/hqdefault.jpg`,
                  }}
                  style={{
                    width: '45%',
                    height: 100,
                  }}
                />
                <View
                  style={{
                    paddingLeft: 7,
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      width: Dimensions.get('screen').width / 2,
                      color: 'black',
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={3}>
                    {item.snippet.title}
                  </Text>
                  <Text style={{fontSize: 12, color: 'black'}}>
                    {item.snippet.channelTitle}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    //marginTop:0,
    //backgroundColor: '#f9c2ff',
    //padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    // marginRight:50,

    marginTop: 2,
    //borderRadius:10,
    //borderColor: rgba('')
    //borderWidth: 1,
    //flexDirection: 'row',
    justifyContent: 'center',
    width: wp('98%'),
    height: hp('30%'),
    //justifyContent:'space-around',
    //alignItems:'stretch'
    // width: wp('81.9%'),
    //height: hp('8.4%'),
    //marginLeft: 15,
    //marginTop:600,
    //position:'absolute'
  },
  demacate: {
    //borderColor: '#66b2E9',
    //borderWidth: 1.5,
    //borderRadius:5,
    marginTop: 10,
    backgroundColor: 'white',
  },
  item: {
    padding: 12,
    fontSize: 15,
    height: 90,
    //fontColor:'whit'
    color: 'black',
  },
});
export default Home;
