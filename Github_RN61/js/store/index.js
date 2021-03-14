import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';

/**
 * 自定义中间件 log
 */
const logger = store => next => action => {
  if (typeof action === 'function') {
    console.log('dispatching a function');
  } else {
    console.log('dispatching', action);
  }

  const result = next(action);
  console.log('nextState', store.getState());
  return result;
};

const middleware = [thunk, logger];

/**
 * 使用redux步骤
 * 2. 创建一个store, 中间插入中间件, 步骤恒定.
 */
export default createStore(reducers, applyMiddleware(...middleware));
