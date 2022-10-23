import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        console.log(props)
    }

    render() {
        return (
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: this.props.color }}>
                <Text style={styles.text}> {this.props.text} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: { fontSize: 48, },

});

export default Item;