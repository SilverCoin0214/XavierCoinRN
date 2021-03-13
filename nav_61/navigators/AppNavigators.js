import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../pages/HomePage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

import {Button, Text} from 'react-native';

const BottomTabNavigator = createBottomTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'Page1',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons name={'ios-home'} size={26} />
      ),
    },
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: ({tintColor, focused}) => (
        <Text style={{color: focused ? 'orange' : 'grey'}}>page2</Text>
      ),
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={'ios-people'}
          size={26}
          style={{color: focused ? 'orange' : 'grey'}}
        />
      ),
    },
  },
});

export const AppStackNavigator = createStackNavigator(
  {
    HomePage: {
      screen: BottomTabNavigator,
      navigationOptions: {
        title: '底部导航',
        headerRight: null,
      },
    },
    Page1: {
      screen: Page1,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params && navigation.state.params.name}页面`,
      }),
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        title: '页面2',
        header: null,
      },
    },
    Page3: {
      screen: Page3,
      navigationOptions: (props) => {
        const {navigation} = props;
        const {state, setParams} = navigation;
        const {params = {}} = state;
        return {
          title: params.name ? params.name : 'this is Page3',
          headerRight: (
            <Button
              title={params.mode === 'edit' ? '保存' : '编辑'}
              onPress={() => {
                setParams({mode: params.mode === 'edit' ? '' : 'edit'});
              }}
            />
          ),
        };
      },
    },
  },
  {
    defaultNavigationOptions: {},
  },
);
