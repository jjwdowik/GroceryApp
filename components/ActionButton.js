import React, { Component, } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import styles from '../styles.js';
const constants = styles.constants;

class ActionButton extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight underlayColor={constants.actionColor} onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default ActionButton