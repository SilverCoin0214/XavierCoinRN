import {combineReducers} from 'redux';

import theme from './theme';

/**
 * 使用redux步骤
 * 1. 创建一个合并的reducer
 */
const index = combineReducers({
  theme,
});
export default index;
