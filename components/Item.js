import React, { Component, useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Item = (props) => {

    const _onPressButton = () => {
        alert("kolor : " + props.color +
            "tekst :" + props.text)
    }


    console.log(props)

    const [count, setCount] = useState(0);
    const onPress = () => setCount(console.log("kolor : " + props.color + "tekst :" + props.text));

    return (


        <View style={{ alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: props.color }}>

            <TouchableOpacity
                style={styles.button}
                onPress={_onPressButton}
            >
                <Text style={{ color: "#000000" }}> {props.text} </Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    text: { fontSize: 48, },

});

export default Item;