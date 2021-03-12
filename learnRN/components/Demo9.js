// AsyncStorage 存储
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Demo9 extends Component {
  static navigationOptions = {
    title: 'AsyncStorage相关',
  };

  state = {
    name: 'xavier',
    inputText: '风和日丽',
  };

  async readName() {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value != null) {
        this.setState({name: value});
      }
      Alert.alert('读取数据成功');
    } catch (e) {
      console.log(e);
      Alert.alert('读取数据失败');
    }
  }

  setName = () => {
    AsyncStorage.setItem('name', this.state.inputText);
    Alert.alert('保存成功');
  };

  handleInput = (text) => {
    this.setState({inputText: text});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          defaultValue={this.state.inputText}
          onChangeText={this.handleInput}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styles.button, {marginRight: 8}]}
            onPress={this.setName}>
            <Text style={styles.buttonTxt}>保存</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'blue'}]}
            onPress={this.readName.bind(this)}>
            <Text style={styles.buttonTxt}>读取</Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 8}}>
          <Text>当前的值: {this.state.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
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
});

export default Demo9;
