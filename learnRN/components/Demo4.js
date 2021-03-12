import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';

class Demo4 extends React.Component {
  static navigationOptions = {
    title: 'FlatList组件相关',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>使用FlatList</Text>
        <FlatList
          data={[
            {key: '苹果'},
            {key: '椰子'},
            {key: '葡萄'},
            {key: '凤梨'},
            {key: '西瓜'},
            {key: '柠檬'},
            {key: '橙子'},
            {key: '草莓'},
            {key: '香蕉'},
            {key: '芒果'},
            {key: '甘蔗'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Demo4;
