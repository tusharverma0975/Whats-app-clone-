import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { RootStackParamList } from '../../App';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            product_id: '797',
          })
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
