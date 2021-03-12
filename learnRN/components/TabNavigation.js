import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {TabNavigator} from 'react-navigation';

class MyHomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => {
      <Image
        source={require('./assets/chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />;
    },
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to Notifications"
      />
    );
  }
}

class MyNotificationScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({tintColor}) => {
      <Image
        source={require('./assets/notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />;
    },
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationScreen,
    },
  },
  {
    tabBarPosition: 'top',
    AnimationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  },
);

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}
