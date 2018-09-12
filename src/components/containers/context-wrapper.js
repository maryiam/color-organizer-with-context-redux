import React, { Component } from 'react';
import { StoreContext } from '../../context/store-context';

const ContextWrapper = ComposedComponent =>
  class ContextWrapper extends Component {
    render() {
      return (
        <StoreContext.Consumer>
          {
            store => <ComposedComponent dispatch={store.dispatch} {...store.getState()} />

          }
        </StoreContext.Consumer>
      );
    }
  }

export default ContextWrapper;