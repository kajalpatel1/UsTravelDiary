import React from 'react';
import { Component } from 'react';

import UsStates from '../containers/us-states';
import SelectedState from '../containers/selected-state';



export default class App extends Component {
  render() {
    return (
      <div>
      	<h1>United States Travel App</h1>
        <UsStates   />
        <SelectedState />
				

      </div>
    );
  }
}
