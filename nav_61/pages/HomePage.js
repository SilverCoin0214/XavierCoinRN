import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: "首页",
    headerBackTitle: '返回标题'
  }

  render() {

    const {navigation} = this.props
    return (
      <View style={{flex:1, backgroundColor:'#efefef', paddingTop:30}}>
        <Text style={styles.text}>欢迎来到HomePage</Text>
        <Button
          title={'Go to Page1!'}
          onPress={() => navigation.navigate('Page1', {name: '动态配置的'})}
        />
        <Button
          title={'Go to Page2!'}
          onPress={() => navigation.navigate('Page2')}
        />
        <Button
          title={'Go to Page3!'}
          onPress={() => navigation.navigate('Page3', {mode: 'edit', name:'可修改页面3'})}
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
