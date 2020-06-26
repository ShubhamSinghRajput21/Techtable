import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, filePath} from 'react-native';

import Pdf from 'react-native-pdf';

//const source = require('./pdffolder/pdf.pdf');
const source = {uri: 'http://www.pdf995.com/samples/pdf.pdf'};
//const source = {uri:'file:///C:/Users/akash%20kumar/Desktop/react-native/ak/pdffolder/pdf.pdf'};
class PDFExample extends Component {
  render() {
    //const source = require('./test.pdf');  // ios only
    //const source = {uri:'bundle-assets://test.pdf'};

    //const source = {uri:'file:///C:/Users/akash%20kumar/Desktop/react-native/ak/pdffolder/pdf.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};

    return (
      <Pdf
        source={source}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: '100%',
    //height:150,
  },
});

export default PDFExample;
