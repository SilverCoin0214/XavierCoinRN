// 修改 顶部状态栏
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
  StatusBar,
} from 'react-native';

class Demo12 extends Component {
  static navigationOptions = {
    title: 'StatusBar顶部状态栏',
  };

  state = {
    hidden: false,
    barStyle: 'default',
  };

  changeHidden = () => {
    let hidden = this.state.hidden ? false : true;
    this.setState({hidden: hidden});
  };

  changeBarStyle = () => {
    let barStyle =
      this.state.barStyle == 'light-content' ? 'dark-content' : 'light-content';
    this.setState({barStyle: barStyle});
  };

  render() {
    return (
      <View style={{backgroundColor: 'blue'}}>
        <StatusBar barStyle={this.state.barStyle} hidden={this.state.hidden} />
        <TouchableOpacity style={styles.button} onPress={this.changeHidden}>
          <Text>显示成隐藏</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.changeBarStyle}>
          <Text>改变主题颜色</Text>
        </TouchableOpacity>
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
    backgroundColor: '#4ba37b',
    width: 100,
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
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

export default Demo12;
