import { createStore, combineReducers, applyMiddleware } from 'redux';
import { colors, sortBy } from './reducers';
import initialData from '../lib/data';

const logger = store => next => action => {
  console.log('logger', action)
  let result;
  console.log('action type', action.type);
  console.log('previous state', store.getState());
  result = next(action);
  console.log('after change state', store.getState());

  return result;
};

const saver = store => next => action => {
  let result = next(action);

  localStorage.setItem('store-value', JSON.stringify(store.getState()));

  return result;
};

const storeFactory = (defaultData = initialData) =>
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({ colors, sortBy }),
    localStorage.getItem('store-value') ?
      JSON.parse(localStorage.getItem('store-value')) :
      defaultData
  )

export default storeFactory;
