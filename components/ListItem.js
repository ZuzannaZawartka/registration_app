import React, { Component, useState } from 'react';

import { View, Button, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonNew from './MyButton';
import logo from './avatar.png'

const ListItem = (props) => {

    const _onPressButton = () => {
        alert("kolor : " + props.color +
            "tekst :" + props.text)
    }





    return (


        <View style={styles.style1}>


            <View style={styles.style3}>

                <View style={styles.style4}>
                    <Image

                        source={{
                            uri: 'https://www.w3schools.com/howto/img_avatar2.png',
                        }}
                        style={{ height: 80, width: 80, resizeMode: "center", margin: 20 }}
                    />
                </View>


                <View style={styles.style2}>

                    <View style={{ padding: 10 }}>
                        <ButtonNew text="Details"></ButtonNew>
                    </View>
                    <View style={{ padding: 10 }}>
                        <ButtonNew text="Delete"></ButtonNew>
                    </View>

                </View>
            </View>
            <Text style={{ textAlign: "center", padding: 10 }}>{props.id} : {props.login}</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    text: { fontSize: 48, },
    container: { alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: "green" }
    , style1: {

        flex: 2,
        display: "flex",
        flexDirection: 'column',

        justifyContent: "center"
    }
    , style2: {

        flex: 2,
        display: "flex",
        flexDirection: 'row',

        justifyContent: "center"
    }
    , style3: {


        display: "flex",
        flexDirection: "row",
        alignItems: "center"

    }
    , style4: {



        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"

    },

});

export default ListItem;