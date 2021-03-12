// Picker 下拉选择器
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

class Demo13 extends Component {
  static navigationOptions = {
    title: 'Picker组件下拉框',
  };

  users = [
    {label: '请选择性别', value: ''},
    {label: '男', value: 'male'},
    {label: '女', value: 'female'},
    {label: '其他', value: 'other'},
  ];

  state = {user: ''};
  updateUser = (user) => {
    this.setState({user: user});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>请选择性别: </Text>

        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          {this.users.map((o, index) => {
            return <Picker.Item label={o.label} value={o.value} />;
          })}
        </Picker>

        <Text style={styles.label}>你的选择是:</Text>
        <Text style={styles.text}>{this.state.user}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
  label: {
    fontSize: 14,
    color: '#333333',
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
});

export default Demo13;
