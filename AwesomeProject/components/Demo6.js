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

class App extends Component {
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
          使用版本判断: {Platform.Version >= 25 ? 'android' : 'null'}
        </Text>

        <Text style={styles.textStyle}>
          使用版本判断: {iosVersion < 25 ? 'ios' : 'null'}
        </Text>
      </View>
    );
  }
}

export default App;
