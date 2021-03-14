import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DetailPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageText}>详情页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  pageText: {
    fontSize: 30,
    color: 'red',
  },
});
