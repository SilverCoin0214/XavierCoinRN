import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Form, Input} from 'beeshell';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      {/* <Form>
        <Form.Item label="姓名" hasLine>
          <Input value="" onChange={() => {}} />
          <Text>描述信息</Text>
        </Form.Item>
      </Form> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
});

export default App;
