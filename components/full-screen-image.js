import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { GoBack } from './go-back';

const classes = {
    image: {
        width: 400,
        height: 400
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
}

const FullScreenImage = (props) => {
    const { uri } = props;
    if(uri) {
        return (
            <View style={classes.container}>
                <Image source={{uri: uri}} style={classes.image}/>
                <GoBack/>
            </View>
        )
    }
    return <Text>image</Text>
}

export {FullScreenImage};