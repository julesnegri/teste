import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import styles from './styles';

const AsideLeft = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Entypo name="menu" size={32} color={'#fff'} />
      </View>
    </View>
  );
};

export default AsideLeft;