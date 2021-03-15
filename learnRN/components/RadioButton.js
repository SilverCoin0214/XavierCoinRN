import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

let selectedImage = require('../assets/radio_selectd.png');
let unselectedImage = require('../assets/radio_select.png');

export default class RadioButton extends React.Component {
  static defaultProps = {
    selectedChange: false,
    selectTextColor: '#F83D2B',
    unSelectedTextColor: '#333333',
  };

  state = {
    selected: this.props.selected,
  };

  constructor(props) {
    super(props);
    this.selectedChange = props.selectedChange;
  }

  render() {
    const [text, drawablePadding] = this.props;
    const {selected} = this.state;

    return (
      <TouchableOpacity
        onPress={() => {
          if (this.selectedChange) {
            this.selectedChange(selected, !selected);
          }
          this.setState({
            selected: !selected,
          });
        }}>
        <View>
          <Image
            style={styles.image}
            source={selected ? selectedImage : unselectedImage}
          />
          <Text
            style={{
              color: selected
                ? this.props.selectTextColor
                : this.props.unSelectedTextColor,
              marginLeft: drawablePadding,
            }}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  setSelectedState(state) {
    this.setState({
      selected: state,
    });
  }
}

const styles = StyleSheet.create({});
