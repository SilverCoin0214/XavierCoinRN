import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello</Text>;
  }
}

const SimpleApp = StackNavigator({
  Home: {screen: HomeScreen},
});

export default class App extends React.Component {
  render() {
    return (
      <View>
        <SimpleApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
