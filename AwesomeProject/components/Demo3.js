import React from 'react';
import {ScrollView, Image, Text} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={{flex: 1, fontSize: 50, marginTop: 50}}>Scroll me</Text>
        <Image
          source={{
            uri:
              'https://hbimg.huabanimg.com/5d4c824ebb073ab0238ed1f3bcb283d5d617933939f87c-G8ZQuc_fw658/format/webp',
            height: 3600,
          }}
        />
      </ScrollView>
    );
  }
}

export default App;
