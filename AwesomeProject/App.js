import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

import MyTabNavigator from './components/MyTabNavigator';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Chat', {user: 'coin'})}
          title="go to chat"
        />
      </>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;

    return {
      title: isInfo
        ? `${user}'s Contact info`
        : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({mode: isInfo ? 'none' : 'info'})}
        />
      ),
    };
  };

  render() {
    const {params} = this.props.navigation.state;

    return <Text>chat with {params.user}</Text>;
  }
}

class RecentChatScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => navigate('Chat', {user: 'Xavier'})}
          title="Go to Chat"
        />
      </View>
    );
  }
}

class AllContactsScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
        <Text>list of Contact</Text>
        <Button
          onPress={() => navigate('Chat', {user: 'Coin'})}
          title="go to chat with coin"
        />
      </>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: {screen: RecentChatScreen},
  All: {screen: AllContactsScreen},
});

class NavigatorWrappingScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>这个是组件</Text>
        <MainScreenNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

NavigatorWrappingScreen.router = MainScreenNavigator.router;

const SimpleApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    // screen: MyTabNavigator,
    navigationOptions: {
      title: 'My chats',
    },
  },
  Chat: {screen: ChatScreen},
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
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
