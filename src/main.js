import React from 'react';
import HelloWorld from './HelloWorld'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'React',
    }
  }

  render() {
      return <HelloWorld text = { this.state.text }/>;
  }
}
