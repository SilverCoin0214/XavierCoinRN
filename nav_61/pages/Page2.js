import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default class Page2 extends React.Component {
  render() {

    const {navigation} = this.props
    return (
      <View style={{flex:1, backgroundColor:'lightblue', paddingTop:30}}>
        <Text style={styles.text}>欢迎来到Page2</Text>
        <Button
          title={'Go to back!'}
          onPress={() => navigation.goBack()}
        />
        <Button
          title={'Go to Page2!'}
          onPress={() => navigation.navigate('Page3')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'red'
  }
})
