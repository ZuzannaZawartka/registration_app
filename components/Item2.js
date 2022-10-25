import React, { Component, useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Item = (props) => {

    const _onPressButton = () => {


        props.fun(props.text)



    }


    // console.log(props.text)


    return (


        <View style={{
            fontSize: 36,
            backgroundColor: props.color,
            textAlign: "center"
        }} >

            <TouchableOpacity

                onPress={_onPressButton}
            >
                <Text style={{
                    fontSize: 36,
                    backgroundColor: props.color,
                    textAlign: "center",
                    color: "white"
                }}> {props.text} </Text>

            </TouchableOpacity>

        </View >
    );
}


const styles = StyleSheet.create({
    stylez: {
        fontSize: 36,
        backgroundColor: '#63636e',
        textAlign: "center"
    },
});

export default Item;