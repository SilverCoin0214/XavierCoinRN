import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';

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

class Demo1 extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: '图片与Text标签',
  };

  render() {
    return (
      <View style={styles.view}>
        <Image
          source={require('../assets/p1.jpg')}
          style={{height: 300, width: 300}}
        />
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

export default Demo1;
