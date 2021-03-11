import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};
    setInterval(() => {
      this.setState(() => {
        return {isShowingText: !this.state.isShowingText};
      });
    }, 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <View style={styles.view}>
        <Text style={styles.text}>hello ! {this.props.name}</Text>
      </View>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
        <Image source={require('../assets/mypicture.jpg')} />
        <Greeting name="xavier" />
        <Greeting name="silver" />
        <Greeting name="coin" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 20,
  },
  view: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default App;
