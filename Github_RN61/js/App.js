import React from 'react';
import {Provider} from 'react-redux';
import AppNavigators from './navigator/AppNavigators';
import store from './store';

export default class App extends React.Component {
  /**
   * 使用redux步骤
   * 3. 将store导入在最顶部, 用Provider容器包裹
   */
  render() {
    return (
      <Provider store={store}>
        <AppNavigators />
      </Provider>
    );
  }
}
