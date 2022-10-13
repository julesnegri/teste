import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


import styles from './styles';

const Footer = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box01}>

        </View>
        <View style={styles.box02}>
            <View style={styles.space}>
                <View>
                    <Text style={styles.title}>30</Text>
                    <Text style={styles.spam}>DELIVERY</Text>
                </View>
                <View>
                    <Text style={styles.title}>15</Text>
                    <Text style={styles.spam}>TAKE WAY</Text>
                </View>
            </View>
            <View style={styles.space2}>
                <Text style={styles.title}>16:26</Text>
                <Text style={styles.spam2}>06 OUT 22</Text>
            </View>
        </View>
        <View style={styles.box03}>
            <View style={styles.box03Row}>
                <View style={styles.box03Aten}>
                    <FontAwesome name="user-circle-o" size={60} color="black" />
                </View>
                <View style={styles.box03Aten}>
                    <Text style={styles.boxAtenSpam}>Delivery</Text>
                </View>
                <View style={styles.box03Aten}>
                    <Text style={styles.boxAtenSpam}>Take Way</Text> 
                </View>
            </View>
            <View style={styles.box03Button}>
                <Text style={styles.title}>Checkout</Text>
            </View>
        </View>
    </View>
  );
};

export default Footer;