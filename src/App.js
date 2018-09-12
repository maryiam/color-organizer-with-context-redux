import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Colors, CreateColor, SortColors } from './components/containers/container-components';
import { StoreContext } from './context/store-context';

export class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentDidMount() {
    this.unsbscribe = this.store.subscribe(
      () => this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsbscribe();
  }

  render() {
    return (
      <div className='content'>
        <StoreContext.Provider value={this.store}>
          <div className='header'>
            <CreateColor />
            <SortColors />
          </div>
          <Colors />
        </StoreContext.Provider>
      </div>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}
