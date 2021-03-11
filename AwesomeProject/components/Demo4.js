import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>使用FlatList</Text>
        <FlatList
          data={[
            {key: 'name1'},
            {key: 'name2'},
            {key: 'name3'},
            {key: 'name4'},
            {key: 'name5'},
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
    paddingTop: 40,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
