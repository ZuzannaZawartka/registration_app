

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Item from "./components/Item"


export default class App extends React.Component {
  render() {
    console.log("App") // tą konsolę zobacz w przeglądarce
    return (
      <View style={styles.color}>
        <Item color="#a8133d" text="header" />
        <Item color="#40b526" text="Content" />
        <Item color="#3f4770" text="Footer" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#ffff00',
  },


});