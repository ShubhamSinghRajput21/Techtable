import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {WebView} from 'react-native-webview';
import Home from './Home';
class Watch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    const {video_url} = this.props.route.params;
    return (
      <SafeAreaView style={styles.safeArea}>
        {
          <WebView
            source={{uri: 'https://www.youtube.com/embed/' + video_url}}
            startInLoadingState={true}
          />
        }
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default Watch;
