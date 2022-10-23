
import React, { useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Item from "./components/Item"

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

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
    const map1 = arr.map((x, i) => <Item color={randomHexColor()} text={"item_" + i} ></Item>);
    return (
      <View style={styles.color}>
        <View style={styles.color2}>
          {map1}
        </View>
        <View style={styles.color3}>
          {map1}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    flex: 1,

    display: "flex",
    flexDirection: 'row',
    backgroundColor: '#ffff00',
  },
  color2: {
    flex: 1,
    display: "flex",
    flexDirection: 'column',
    backgroundColor: '#ffff00',
  },
  color3: {
    flex: 1,
    display: "flex",
    flexDirection: 'column-reverse',
    color: "#121211",
    backgroundColor: '#ffff00',
  },

});