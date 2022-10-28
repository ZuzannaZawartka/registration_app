import React, { Component, useState } from 'react';

import { View, Text, KeyboardAvoidingView, TextInput, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import ButtonNew from "./MyButton"
const Main = (props) => {


    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // const fetch = async () => {
    //     try {
    //         const response = await fetch(
    //             'http://172.20.10.4:3000/'
    //         );
    //         const json = await response.text();
    //         console.log(json)
    //         return json;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const sendData = async () => {
        fetch('http://172.20.10.4:3000/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password,
            })
        }).then((response) => response.json())
            .then((json) => {
                console.log(json.bool)
                // if (json.bool == false) {
                //     alert("Taki użytkownik już istnieje ")
                // } else {
                props.navigation.navigate("Users")
                //  }

            })
            .catch((error) => {
                console.error(error);
            });;
    };


    const anyFunction = () => {

        sendData()
    }


    return (


        <View style={styles.style1}>

            <View style={styles.style1}>
                <Text style={styles.text}>Register App</Text>
            </View>
            <View style={styles.style2}>

                <Text style={styles.text2}>Welcome in app!</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Podaj Login"
                    onChangeText={newText => setLogin(newText)}
                    defaultValue={""}
                />

                <TextInput
                    style={{ height: 40, textAlign: "center" }}
                    placeholder="Podaj Haslo"
                    onChangeText={newText => setPassword(newText)}
                    defaultValue={""}

                />

                <ButtonNew testPress={() => anyFunction()} style={{ justifyContent: "center", justifyContent: "center" }} text="Register" ></ButtonNew>

            </View>
        </View >

    );
}







const styles = StyleSheet.create({
    style1: {

        flex: 2,
        display: "flex",
        flexDirection: 'column',
        backgroundColor: 'green',
        justifyContent: "center"
    },
    style2: {
        flex: 2,
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        justifyContent: "flex-start",
        alignItems: "center",

        paddingTop: 30,
        textAlign: "center",
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
        fontSize: 80,
        color: "white",
        textAlign: "center",
        flexWrap: "wrap"
    },

    text2: {
        fontSize: 20,
        color: "grey",
        textAlign: "center",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },
    input: {
        borderBottomColor: "red",
        height: 50,
        textAlign: "center",
    }

});

export default Main;