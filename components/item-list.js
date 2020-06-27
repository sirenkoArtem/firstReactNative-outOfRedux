import React, {Component} from 'react';
import { View, Text, Image, StyleSheet,
        Dimensions, TouchableHighlight  } from 'react-native';
import UnsplashApiService from '../UnsplashApiService';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

//just to try bootstrap
const
  BODY_COLOR = '#000022',
  TEXT_MUTED = '#888888';

const constants = {
  BODY_COLOR, TEXT_MUTED,
};
//----------------

const classes = {
  description: {
    alignSelf: 'stretch',
    fontSize: 15,
    fontStyle: 'italic'
  },

  image: {
    height: 150,
    width: 400
  },

  container: {
    flex: 1
  },

  name: {
    fontWeight: 'bold',
    fontSize: 17
  },
};

export class ItemList extends Component{

    state = {
        dataList: null
    }

    componentDidMount() {
        const cars = 'cars';
        const apiUnsplash = new UnsplashApiService();
        let carsData = apiUnsplash.getData(cars);

        carsData.then((cars) => {
            this.setState(() => {
                const newArr = [ ...cars.results ];
                return {
                    dataList: newArr
                }
            });
        });
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { user: {name},
            urls: {small, regular},
            alt_description, id } = item;

            return(
                <View style={styles.container} key={id}>
                    <TouchableHighlight onPress={() => {this.props.onToggleClicked(id, regular)}}>
                        <Image
                            source={{uri: small}}
                            style={styles.image}
                        />
                    </TouchableHighlight>
                    <Text style={styles.description}>
                        {alt_description}
                    </Text>
                    <Text style={styles.name}>
                        {name}
                    </Text>
                </View>
            )
        })
    }

    render() {
        //bootstrap too
        const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
        const bodyStyle = styles = bootstrapStyleSheet.create();
        //-------------
        if(this.state.dataList) {
            const items = this.renderItems(this.state.dataList);
            return (
                <View
                    style={[bodyStyle.alignItemsCenter]}
                    {...this.props}
                    >
                   {items}
                </View>
            )
        }

        return(
           <View>
               <Text>Loading...</Text>
           </View>
        )
    }
}