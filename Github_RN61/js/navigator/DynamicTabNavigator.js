import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {connect} from 'react-redux';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPgae';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// import EventTypes from '../util/EventTypes';
// import EventBus from 'react-native-event-bus'

const TABS = {
  //在这里配置页面的路由
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      //   tabBarIcon: ({tintColor, focused}) => (
      //     <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}} />
      //   ),
    },
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      //   tabBarIcon: ({tintColor, focused}) => (
      //     <Ionicons
      //       name={'md-trending-up'}
      //       size={26}
      //       style={{color: tintColor}}
      //     />
      //   ),
    },
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      //   tabBarIcon: ({tintColor, focused}) => (
      //     <MaterialIcons name={'favorite'} size={26} style={{color: tintColor}} />
      //   ),
    },
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      //   tabBarIcon: ({tintColor, focused}) => (
      //     <Entypo name={'user'} size={26} style={{color: tintColor}} />
      //   ),
    },
  },
};

class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  _tabNavigator() {
    if (this.Tabs) {
      return this.Tabs;
    }
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage}; //根据需要定制显示的tab
    PopularPage.navigationOptions.tabBarLabel = '最热'; //动态配置Tab属性
    return (this.Tabs = createAppContainer(
      createBottomTabNavigator(tabs, {
        tabBarComponent: props => {
          return <TabBarComponent {...props} theme={this.props.theme} />;
        },
      }),
    ));
  }

  render() {
    const Tab = this._tabNavigator();
    return <Tab />;
  }
}

class TabBarComponent extends React.Component {
  render() {
    return <BottomTabBar {...this.props} activeTintColor={this.props.theme} />;
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);
