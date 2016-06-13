import React, { Component, } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles.js';

class StatusBar extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <View style={styles.statusbar}></View>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>
    )
  }
}

export default StatusBar