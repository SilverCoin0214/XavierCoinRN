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
} from 'react-native';

class App extends Component {
  UNSAFE_componentWillMount = () => {
    // 创建动画属性对象
    this.animatedWidth = new Animated.Value(50);
    this.animatedHeight = new Animated.Value(100);
  };

  animatedBox = () => {
    // 点击后, 设置动画变化
    Animated.timing(this.animatedWidth, {
      toValue: 200,
      duration: 1000,
    }).start();
    Animated.timing(this.animatedHeight, {
      toValue: 500,
      duration: 500,
    }).start();
  };

  render() {
    const animateStyle = {
      width: this.animatedWidth,
      height: this.animatedHeight,
    };

    return (
      <TouchableOpacity style={styles.container} onPress={this.animatedBox}>
        <Animated.View style={[styles.box, animateStyle]} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
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

export default App;
