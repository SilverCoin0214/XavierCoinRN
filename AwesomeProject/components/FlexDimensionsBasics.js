import React from 'react';
import {View} from 'react-native';

const FlexDimensionsBasics = () => {
  return (
    <View style={{height: 400}}>
      <View style={{flex: 2, backgroundColor: 'powderblue'}} />
      <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    </View>
  );
};

export default FlexDimensionsBasics;
