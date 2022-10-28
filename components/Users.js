import React, { useEffect, Component, useState } from 'react';

import { View, Button, FlatList, ActivityIndicator, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ListItem from './ListItem';
import ButtonNew from "./MyButton"
const Screen2 = (props) => {

    const backToLogin = () => {
        props.navigation.navigate("Main")
    }

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const sendData = async () => {

        fetch('http://172.20.10.4:3000/', {
            method: 'GET',

        }).then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);
                return json;
            })
            .catch((error) => {
                console.error(error);
            });;
        console.log("FETCHOWANIE")
    };

    //sendData();


    const DATA = [
        {
            id: '1',
            title: 'First Item',
        },
        {
            id: '2',
            title: 'Second Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
    ];


    let num = 0;
    const renderItem = ({ item }) => (
        num++,
        <Text>xx</Text>
        // <ListItem key={++num} id={item.id} login={item.title} />
    );

    sendData()
    return (


        // <View style={styles.style1}>
        //     <ButtonNew testPress={() => backToLogin()} style={{ justifyContent: "center", justifyContent: "center" }} text="BACK TO LOGIN PAGE"  ></ButtonNew>

        //     <FlatList

        //         data={DATA}
        //         renderItem={renderItem}
        //         keyExtractor={item => item.id}
        //     />


        // </View>
        <View style={{ flex: 1, padding: 24 }}>
            {/* {isLoading ? <ActivityIndicator /> : (
                // <FlatList
                //     data={data}
                //     keyExtractor={({ id }, index) => id}
                //     renderItem={({ item }) => (
                //         <Text>{item.title}, {item.releaseYear}</Text>
                //     )}
                // />
            )} */}
        </View>
    );
}


const styles = StyleSheet.create({
    text: { fontSize: 48, },
    style1: {

        flex: 2,
        display: "flex",
        flexDirection: 'column',
    }
});

export default Screen2;