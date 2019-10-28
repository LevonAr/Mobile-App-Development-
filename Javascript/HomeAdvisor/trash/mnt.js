import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

class Counter extends Component {
  state = {
    count: 0,
  }

  componentDidMount() {
    this.timer = setInterval(this.incrementCount, 1000)
  }

  incrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  
  render() {
    return <Text>{this.state.count}</Text>
  }
}
