import React from 'react';
import { View, Text , Image } from 'react-native';

import styles  from './styles';

const Main = () => {
    return (
        <View style={styles.container}>
        <View>
            <View>
                <Text style={styles.titleCategoria}>Bebidas</Text>
                <View style={styles.containerImg}>
                    <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.cardImg} />
                    <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.cardImg} />
                    <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.cardImg} />
                    <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.cardImg} />
                    <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.cardImg} />
                    <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.cardImg} />
                    <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.cardImg} />
                </View>
            </View>
        </View>
        </View>
    )
};

export default Main;