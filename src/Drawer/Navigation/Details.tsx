// import {Button, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// // import { RootStackParamList } from '../../App';
// import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
// import {useNavigation} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

// const Details = ({route}: DetailsProps) => {
//   const {product_id} = route.params;

//   const navigation =
//     // useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   return (
//     <View style={styles.container}>
//       <Text>Details : {product_id} </Text>
//       <Button
//         title="Going to Home "
//         onPress={() => navigation.navigate('Home')}></Button>
//     </View>
//   );
// };

// export default Details;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   smallText: {
//     color: '#000000',
//   },
// });
