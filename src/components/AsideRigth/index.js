import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { AntDesign, FontAwesome } from '@expo/vector-icons';

import styles  from './styles';

const AsideRigth = () => {
  const [qtd, setQtd] = useState(0);
  const onPressIncrement = () => setQtd(prevCount => prevCount + 1);
  const onPressDecrement = () => setQtd(prevCount => prevCount - 1);

  return (
    <View style={styles.container}>
      {/*  */}
        <View style={styles.listItem}>
          <View style={styles.add}>
          <TouchableOpacity
            onPress={onPressDecrement}
          >
            <AntDesign name="minuscircle" size={24} color="#a33224" />
          </TouchableOpacity>
            <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.imgProdList} />
            <TouchableOpacity
              onPress={onPressIncrement}
            >
              <AntDesign name="pluscircle" size={24} color="#3d8d0e" />
            </TouchableOpacity>
          </View>
          <View style={styles.boxDescProdList}>
            <View style={styles.titleProdList}>
              <Text>Titulo</Text>
            </View>
            <View style={styles.valuesProdList}>
                <Text>{qtd}</Text>
                <Text>8,00</Text>
                <Text>24,00</Text>
            </View>
          </View>
          <View style={styles.edit}>
            <FontAwesome name="trash-o" size={24} color="#202020" />
            <FontAwesome name="edit" size={24} color="#202020" />
          </View>
        </View>
    </View>
  );
}

export default AsideRigth;