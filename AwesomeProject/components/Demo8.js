import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
// Alert基本操作
const App = () => {
  const showAlert = () => {
    Alert.alert('发送数据成功');
  };

  const showTip = () => {
    Alert.alert('删除数据成功');
  };

  const showTip2 = () => {
    Alert.alert(
      '警告',
      '确认删除?',
      [
        {text: '确认', onPress: () => showTip()},
        {text: '取消', style: 'cancel'},
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={showAlert} style={styles.button}>
        <Text>发送</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showTip2} style={styles.button}>
        <Text>删除</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  activityIndicator: {
    height: 80,
  },
  button: {
    backgroundColor: '#4ba37b',
    width: 100,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});

export default App;
