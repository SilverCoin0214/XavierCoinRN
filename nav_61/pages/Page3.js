import React from 'react'
import { View, Button, Text, StyleSheet, TextInput } from 'react-native'

export default class Page3 extends React.Component {
  render() {

    const { navigation } = this.props
    const { state, setParams } = navigation
    const { params } = state
    const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成'

    return (
      <View style={{flex:1, backgroundColor:'lightgreen', paddingTop:30}}>
        <Text style={styles.text}>欢迎来到Page3</Text>
        <Button
          title={'Go to back!'}
          onPress={() => navigation.goBack()}
        />
        <Button
          title={'Go to Page1!'}
          onPress={() => navigation.navigate('Page1')}
        />

        <Text>{showText}</Text>
        <TextInput
          onChangeText={(text) => {
            setParams({name: text})
          }}
          placeholder="可编辑"
          style={styles.textInput}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'red'
  },
  textInput: {
    backgroundColor: 'lightyellow',
    height: 30,
    fontSize: 20
  }
})
