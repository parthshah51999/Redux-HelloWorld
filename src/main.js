import React from 'react';
import HelloWorld from './HelloWorld'
import store from './store'

export default class Main extends React.Component {
  render() {
      return <HelloWorld text = { store.getState().text }/>;
  }
}
