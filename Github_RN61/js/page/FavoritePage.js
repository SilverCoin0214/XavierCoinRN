import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action';

class FavoritePage extends Component {

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.pageText}>FavoritePage</Text>

        <Button
          title={'修改主题'}
          onPress={() => this.props.onThemeChange('green')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
  },
  pageText: {
    fontSize: 30,
    color: 'red',
  },
});

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
});

export default connect(
  null,
  mapDispatchToProps,
)(FavoritePage);
