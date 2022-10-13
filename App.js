import { StyleSheet, Text, View } from 'react-native';

import AsideLeft from './src/components/AsideLeft';
import Main from './src/components/Main';
import AsideRigth from './src/components/AsideRigth';
import Footer from './src/components/Footer';

export default function App() {
  return (

    <View>
      <View style={styles.home}>
        <AsideLeft />
        <Main />
        <AsideRigth />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    width: '100%',
    flexDirection: 'row',
  },
});
