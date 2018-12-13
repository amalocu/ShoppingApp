/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { SwitchNavigator } from './src/scenes/navigation/navigation';
import {Provider} from 'react-redux';
import Store from './store'


//npm install --save react-navigation  ///instalar los componentes de navegacion.
type Props = {};

export default class App extends Component<Props> {
    constructor(props){
      super(props);
    }
  
  render() {
    return (
      <Provider store = {Store}>
       <SwitchNavigator/>
      </Provider>
    );
  }
}
