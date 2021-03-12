// 动画 animate
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  Animated,
  Switch,
} from 'react-native';

class Demo11 extends Component {
  static navigationOptions = {
    title: 'Switch组件显示',
  };

  constructor(props) {
    super(props);
    this.label = {false: '关', true: '开'};
    this.state = {switchValue: true};
  }

  toggleSwith = (value) => {
    this.setState({switchValue: value});
  };

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.switchValue}
          onValueChange={this.toggleSwith}
        />
        <View>
          <Text>Switch当前状态: {this.label[this.state.switchValue]}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  activityIndicator: {
    height: 80,
  },
  button: {
    flex: 1,
    backgroundColor: '#4ba37b',
    width: 100,
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    margin: 5,
    height: 44,
    width: '100%',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  buttonTxt: {
    justifyContent: 'center',
    color: '#ffffff',
  },
  box: {
    backgroundColor: 'blue',
    width: 50,
    height: 100,
  },
});

export default Demo11;
