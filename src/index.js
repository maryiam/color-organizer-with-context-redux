import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import storeFactory from './redux/storeFactory';
import './styles/Main.scss';

const store = storeFactory();
console.log(store.getState());

render(
  <App store={store}/>,
  document.getElementById('react-container')
)