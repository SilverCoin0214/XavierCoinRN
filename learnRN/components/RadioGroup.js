import React from 'react';
import {View, Text} from 'react-native';
import RadioButton from './RadioButton';

export default class RadioGroup extends React.Component {
  currentIndex = -1;
  dataArray = [];
  itemChange = false;

  constructor(props) {
    super(props);
    this.itemChange = props.itemChange;
  }

  render() {
    this.dataArray = [];
    const {data, orientation, defaultValue, drawablePadding} = this.props;

    return (
      <View style={{flexDirection: orientation}}>
        {data.map((radioData, index) => {
          return (
            <RadioButton
              selected={index === defaultValue ? true : false}
              key={index}
              ref={(RadioButton) => this.dataArray.push(RadioButton)}
              text={radioData.text}
              drawablePadding={drawablePadding}
              selectedChange={() => {
                this.change(index);
              }}
            />
          );
        })}
      </View>
    );
  }

  change(index) {
    this.currentIndex = index;
    this.dataArray.map((refer, index2) => {
      if (refer !== null) {
        refer.setSelectedState(index2 === this.currentIndex);
      }
    });
    this.itemChange(this.currentIndex);
  }
}
