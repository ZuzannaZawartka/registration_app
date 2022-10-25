
import React, { useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Item from "./components/Item2"
import { Dimensions } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { string: "", sum: "", prev: 0 }

    Dimensions.addEventListener("change", () => {
      this.setState({
        orientation: this.isPortrait()
      })
    })
    this.setState({
      orientation: this.isPortrait()
    })


  }

  isPortrait = () => {
    let dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  check(text) {

    switch (text) {
      case ("C"):
        this.setState({
          string: "",
          sum: ""
        }, () => {
          this.convert();
        });
        break;
      case ("Del"):
        console.log()
        let word = (this.state.string).toString()
        this.setState({
          string: word.substring(0, word.length - 1)
        }, () => {

          this.convert();


        });
        break;
      case ("="):
        this.setState({
          string: this.state.sum,
          sum: "",
        });
        break;
      case ("Sqrt"):
        console.log(this.state.sum)
        this.setState({
          string: "Math.sqrt(" + this.state.string + ")",
        }, () => {
          this.setState({
            string: this.convert(),
            sum: ""
          })
        });
        break;

      case ("Pow"):
        console.log(this.state.sum)
        this.setState({
          string: "Math.pow(" + this.state.string + ",2)",
        }, () => {
          this.setState({
            string: this.convert(),
            sum: ""
          })
        });
        break;

      case ("Sin"):
        console.log(this.state.sum)
        this.setState({
          string: "Math.sin(" + this.state.string + ")",
        }, () => {
          this.setState({
            string: this.convert(),
            sum: ""
          })
        });
        break;
      case ("Cos"):
        console.log(this.state.sum)
        this.setState({
          string: "Math.cos(" + this.state.string + ")",
        }, () => {
          this.setState({
            string: this.convert(),
            sum: ""
          })
        });
        break;
      default:
        if ((text == "-" && this.state.string[this.state.string.length - 1] != "-") || typeof (text) == typeof (3) || (this.state.string.length > 0 && !isNaN(parseInt(this.state.string[this.state.string.length - 1])))) {

          this.setState({
            string: this.state.string + text,

          }, () => {
            if (!isNaN(parseInt(text) && text != ".")) {
              console.log("liczba")
              this.convert();
            }
          });

          if (typeof (text) == typeof (3)) {
            this.setState({
              sum: this.state.string + text,

            })
          }

        } else {
          if (this.state.string.length && this.state.string[this.state.string.length - 1] != "-") {
            this.setState({
              string: this.state.string.substring(0, this.state.string.length - 1) + text
            }, () => {
              if (!isNaN(parseInt(text) && text != ".")) {
                console.log("liczba2")
                this.convert();
              }
            }, () => {

              this.convert();

            });
          }
          break;
        }
    }
  }


  convert = () => {
    console.log(this.state.string)
    try {
      let sum = eval(this.state.string).toString()
      this.setState({
        sum: eval(this.state.string).toString()
      });

      return sum;
    } catch (error) {
      this.setState({
        // sum: eval(this.state.string + "1")
      });
    }

  }



  write = (text) => {

    this.check(text)


    // for (let i = 0; i < this.state.string.length; i++) {
    //   console.log("literka" + this.state.string[i])
    // }

    //console.log(this.state)

    // this.setState({
    //   sum: "0"
    // });

  }


  render() {

    // this.setState({
    //   orientation: this.isPortrait()
    // })

    let operation;
    if (this.state.orientation) {

      operation = [
        [1, 4, 7, "."],
        [2, 5, 8, 0],
        [3, 6, 9, "="],
        ["Del", "C", "/", "*", "-", "+"]
      ]

    }
    else {

      operation = [
        [1, 4, 7, "."],
        [2, 5, 8, 0],
        [3, 6, 9, "="],
        ["Sqrt", "Pow", "Sin", "Cos"],
        ["Del", "C", "/", "*", "-", "+"]
      ]

    }



    let colors = ["#63636e", "#e3a83d"]
    let key = 0;
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
          <Text style={styles.text}>{this.state.sum}</Text>
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