import React from 'react';
import {Image, View, Text, FlatList, StyleSheet} from 'react-native';

const MOVIES_DATA = [
  {
    key: 1,
    title: '肖申克的救赎',
    year: '1994',
    posters: {
      thumbnail:
        'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp',
    },
  },
  {
    key: 2,
    title: '霸王别姬  / Farewell My Concubine',
    year: '1993',
    posters: {
      thumbnail:
        'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.webp',
    },
  },
  {
    key: 3,
    title: '阿甘正传  / Forrest Gump   ',
    year: '1994',
    posters: {
      thumbnail:
        'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2372307693.webp',
    },
  },
  {
    key: 4,
    title: '这个杀手不太冷  / Léon  ',
    year: '1994',
    posters: {
      thumbnail:
        'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.webp',
    },
  },
];

class App extends React.Component {
  renderMovie({item}) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: item.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={MOVIES_DATA}
        renderItem={this.renderMovie}
        style={styles.list}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 10,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  list: {
    paddingTop: 50,
    backgroundColor: '#F5FCFF',
  },
});

export default App;
