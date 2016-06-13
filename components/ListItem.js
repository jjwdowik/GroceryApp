import React, { Component, } from 'react';
import styles from '../styles.js';
import { View, TouchableHighlight, Text } from 'react-native';

class ListItem extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <TouchableHighlight onpress={this.props.onPress}>
        <View style={styles.li}>
          <Text style= {styles.liText} >{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ListItem