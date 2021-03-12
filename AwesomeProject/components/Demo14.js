// fetch 网络请求
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
  Image,
} from 'react-native';

const REQUEST_URL =
  'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((res) => res.json())
      .then((res) => {
        this.setState({movies: res.movies});
      });
  }

  render() {
    if (!this.state.movies) {
      return this.renderLoadingView();
    }
    let movie = this.state.movies[0];
    return this.renderMoive(movie);
  }

  renderLoadingView() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  renderMoive(movie) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.thumbnail}
          source={{uri: movie.posters.thumbnail}}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 100,
    height: 100,
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
});

export default App;
