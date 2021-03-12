import React, {Component} from 'react';
import {Platform, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
  textStyle: {
    color: 'red',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

class Demo6 extends Component {
  static navigationOptions = {
    title: 'Platform判断平台',
  };

  render() {
    const iosVersion = Platform.Version;
    console.log('iosVersion', typeof iosVersion);
    console.log('iosVersion', iosVersion);

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>平台判断:</Text>
        <Text style={styles.textStyle}>
          使用Platform.OS判断: {Platform.OS === 'ios' ? 'ios' : 'android'}
        </Text>

        <Text style={styles.textStyle}>
          使用Platform.Version判断: {Platform.Version >= 25 ? 'android' : 'ios'}
        </Text>

        <Text style={styles.textStyle}>
          ios版本小于25: {iosVersion < 25 ? 'ios' : 'null'}
        </Text>
      </View>
    );
  }
}

export default Demo6;
