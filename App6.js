
import React, { useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Item from "./components/Item2"


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { string: "", sum: "" }
  }

  write = (text) => {



    this.setState({
      string: this.state.string + text
    });

  }

  render() {

    let operation = [
      [1, 4, 7, "."],
      [2, 5, 8, 0],
      [3, 6, 9, "="],
      ["Del", "C", "/", "*", "-", "+"]

    ]
    let colors = ["#63636e", "#e3a83d"]

    let items = <View style={styles.style3}>{
      operation.map((item, j) => {

        if (j < 3) {
          return (<View style={styles.style4}>{
            item.map(element => {
              return (<Item fun={this.write} text={element} color={colors[0]}></Item>)
            })
          }
          </View>
          );
        } else {

          return (<View style={styles.style5}>{
            item.map(element => {
              return (<Item fun={this.write} text={element} color={colors[1]}></Item>)
            })
          }
          </View>
          );
        }
      })
    }
    </View>

    return (
      <View style={styles.style1}>
        <View style={styles.style1}>
          <Text style={styles.text}>{this.state.string}</Text>
        </View>
        <View style={styles.style2}>

        </View>
        {items}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  style1: {

    flex: 3,
    display: "flex",
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    justifyContent: "center"
  },
  style2: {
    flex: 2,
    display: "flex",
    flexDirection: 'column',
    backgroundColor: '#c9c9c9',
  },
  style3: {
    flex: 10,
    display: "flex",
    flexDirection: 'row',
    color: "#121211",
  },
  style4: {
    flex: 1,
    fontSize: "20px",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-around",
    color: "#121211",
    backgroundColor: '#63636e',
  },
  style5: {
    flex: 1,
    fontSize: "20px",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-around",
    backgroundColor: "#e3a83d",
  },

  text: {

    fontSize: 40,
    textAlign: "right",


  },

});