import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ItemList } from './item-list';

const classes = {
    button: {
        backgroundColor: 'grey',
        width: 200,
        padding: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    }
}

const GoBack = () => {

    return (
        <TouchableOpacity>
            <Text style={classes.button}>GO BACK</Text>
        </TouchableOpacity>
    )
}

export { GoBack };