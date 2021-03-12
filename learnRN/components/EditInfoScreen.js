import React from 'react';
import {View, Text, Button, ActivityIndicator, TextInput} from 'react-native';

class EditInfoScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    let headerRight = (
      <Button
        title="Save"
        onPress={params.handleSave ? params.handleSave : () => null}
      />
    );
    if (params.isSaving) {
      headerRight = <ActivityIndicator />;
    }

    return {headerRight};
  };

  state = {
    nickname: 'Xavier Coin',
  };

  _handleSave = () => {
    this.props.navigation.setParams({isSaving: true});

    // saveInfo().then(() => {
    //   this.props.navigation.setParams({isSaving: false});
    // });
  };

  componentDidMount() {
    this.props.navigation.setParams({handleSave: this._handleSave});
  }

  render() {
    return (
      <TextInput
        onChangeText={(nickname) => this.setState({nickname})}
        placeholder={'nickname'}
        value={this.state.nickname}
      />
    );
  }
}

export default EditInfoScreen;
