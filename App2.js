
import React, { useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Item from "./components/Item"



export default class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    let arr = [
      "#40b526",
      "#b1d417",
      "#c44f0c",
      "#3bb837",
      "#11bccf",
      "#876977",
    ]
    console.log("App") // tą konsolę zobacz w przeglądarce
    const map1 = arr.map((x, i) => <Item color={x} text={"item_" + i} ></Item>);
    return (
      <View style={styles.color}>

        {map1}

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