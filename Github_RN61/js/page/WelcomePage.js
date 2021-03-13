import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class WelcomePage extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      // 跳转到首页
    }, 2000);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>欢迎页面</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
