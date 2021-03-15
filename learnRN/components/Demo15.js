import React from 'react';
import {ScrollView, Image, Text} from 'react-native';
import RadioGroup from './RadioGroup';

class Demo15 extends React.Component {
  render() {
    let data = [{text: '个人'}, {text: '单位'}, {text: '其他'}];

    return (
      <RadioGroup
        orientation="row"
        data={data}
        defaultValue={0}
        drawablePadding={8}
        itemChange={(index) => {
          alert(index);
        }}
      />
    );
  }
}

export default Demo15;
