/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import Firebase from 'firebase';
import styles from './styles.js';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  AlertIOS
} from 'react-native';
import StatusBar from './components/StatusBar.js';
import ListItem from './components/ListItem.js';
import ActionButton from './components/ActionButton.js';

class Project extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }  
  
  componentDidMount() {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza'}, { title: 'Cookies' }])
      })
  }
  
  _renderItem(item) {
    return (
      <ListItem item={item} onpress=""/>
    );
  }
  
  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="Grocery List"/>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview}/>

        <ActionButton title="Add" onpress=""/>
      </View>
    );
  }
}

const newStyles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
  },
});

AppRegistry.registerComponent('Project', () => Project);
