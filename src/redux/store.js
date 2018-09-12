import { createStore, combineReducers } from 'redux';
import { colors, sortBy } from './reducers';
import data from '../lib/data';

const Store = createStore(
  combineReducers({ colors, sortBy }),
  data
);

export default Store;
