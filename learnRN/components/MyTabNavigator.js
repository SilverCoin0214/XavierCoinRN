import React from 'react';
import {TabNavigator} from 'react-navigation';
import {Button, View} from 'react-native';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };

  render() {
    return (
      <View>
        <Text>myHome</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
  };

  render() {
    return (
      <View>
        <Text>MyNotificationsScreen</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

const MyTabNavigator = TabNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  },
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  },
);

export default MyTabNavigator;
