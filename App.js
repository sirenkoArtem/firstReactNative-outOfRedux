import 'react-native-gesture-handler';
import React, { useState, Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { ItemList } from './components/item-list';
import { FullScreenImage } from './components/full-screen-image';

export class App extends Component{

    state = {
        imageId: null,
        uri: null,
    }

    onToggleClicked = (id, uri) => {
        this.setState(() => {
            return {
                imageId: id,
                uri
            }
        })
    }

    render() {
        const { uri } = this.state;

        if(uri) {
            return <FullScreenImage { ...this.state }/>
        }

        return (
            <View>
                <ScrollView>
                    <ItemList onToggleClicked={this.onToggleClicked}/>
                </ScrollView>
            </View>
        );
    }
};
