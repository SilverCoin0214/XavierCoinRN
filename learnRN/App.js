import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo3 from './components/Demo3';
import Demo4 from './components/Demo4';
import Demo5 from './components/Demo5';
import Demo6 from './components/Demo6';
import Demo7 from './components/Demo7';
import Demo8 from './components/Demo8';
import Demo9 from './components/Demo9';
import Demo10 from './components/Demo10';
import Demo11 from './components/Demo11';
import Demo12 from './components/Demo12';
import Demo13 from './components/Demo13';
import Demo14 from './components/Demo14';

const SomeComponent = () => {
  return (
    <View
      style={{
        height: 100,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri:
            'https://hbimg.huabanimg.com/3330741b12d7d07226db2aea495ea804b6ef297b1714e-d97WXK_fw658/format/webp',
        }}
        style={{width: 415, height: 100}}></Image>
    </View>
  );
};

class ChatScreen extends React.Component {
  // 通过 navigation自定一个Mode属性 来渲染 页面标题和右侧的按钮
  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;

    return {
      title: isInfo
        ? `${user}'s Contact Info`
        : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}' info`}
          onPress={() => setParams({mode: isInfo ? 'none' : 'info'})}
        />
      ),
    };
  };

  render() {
    const {params} = this.props.navigation.state;

    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

class RecentChatsScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Button
            onPress={() => navigate('Chat', {user: 'Xavier'})} // navigate的第一个参数是跳转下个页面的索引, 后面是传入的参数
            title="Chat with Xavier"
          />

          <TouchableOpacity
            onPress={() => navigate('Demo1')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo1: Text + Image</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo2')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo2: touch相关按钮</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo3')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo3: ScrollView相关</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo5')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo4: FlatList组件相关</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo6')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo5: Platform判断平台</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo7')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo6: loading组件展示</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo8')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo7: Alert基本操作</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo10')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo8: 动画animate相关</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo11')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo9: Switch组件显示</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo12')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo10: StatusBar状态栏</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo13')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo11: Picker组件下拉框</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo14')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo12: Fetch的使用</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Demo9')}
            style={styles.button}>
            <Text style={styles.buttonText}>Demo13: AsyncStorage相关</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

class AllContactScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>;
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: {screen: RecentChatsScreen},
  All: {screen: AllContactScreen},
});

/**
 * 嵌套将导航器和组件组合成一个导航器, 但组件按部分不属于导航的部分, 导航只有下面的部分才算
 */
class NavigatorWrappingScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SomeComponent />
        <MainScreenNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}
NavigatorWrappingScreen.router = MainScreenNavigator.router;

const SimpleApp = StackNavigator({
  // Home: {
  //   screen: MainScreenNavigator,
  //   navigationOptions: {
  //     title: '首页',
  //   },
  // },
  Home: {
    screen: NavigatorWrappingScreen,
  },
  Chat: {screen: ChatScreen},
  Demo1: {screen: Demo1},
  Demo2: {screen: Demo2},
  Demo3: {screen: Demo3},
  Demo5: {screen: Demo5},
  Demo6: {screen: Demo6},
  Demo7: {screen: Demo7},
  Demo8: {screen: Demo8},
  Demo9: {screen: Demo9},
  Demo10: {screen: Demo10},
  Demo11: {screen: Demo11},
  Demo12: {screen: Demo12},
  Demo13: {screen: Demo13},
  Demo14: {screen: Demo14},
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginBottom: 30,
    width: 260,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
