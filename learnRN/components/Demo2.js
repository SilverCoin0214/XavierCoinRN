import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

class Demo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = {
    title: 'touch相关的按钮',
  };

  _onPressButton() {
    Alert.alert('you tapped the button');
  }

  _onLongPressButton() {
    Alert.alert('you longlonglong tapped the button');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue', marginTop: 50}}>
          <TextInput
            style={{height: 100}}
            placeholder="输入多行文本"
            placeholderTextColor="#666666"
            multiline={true}
            numberOfLines={5}
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 30}}>
            {this.state.text
              .split(' ')
              .map((word) => word && '🍎')
              .join(' ')}
          </Text>
        </View>

        <View style={styles.container}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="red">
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>

          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>

          <TouchableWithoutFeedback onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableOpacity onLongPress={this._onLongPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    padding: 60,
    alignItems: 'center',
  },
  buttonText: {
    padding: 20,
    color: 'white',
  },
});

export default Demo2;
