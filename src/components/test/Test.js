import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    console.log('componentDidMount...');
  }

  // componentWillMount() {
  //   console.log('componentWillMount...');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps');
  // }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
