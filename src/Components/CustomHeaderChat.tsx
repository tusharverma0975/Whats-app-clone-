// CustomHeader.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import design from './ChatUI/ChatScreen';
import BackArrow from '../assets/BackArrow.svg';

const CustomHeaderChat = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.arrowContainer}>
        <BackArrow />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileContainer}>
        <Image source={require('../pexels-pixabay-65894.jpg')} style={styles.profileImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 70,
  },
  arrowContainer: {
    marginRight: 10,
  },
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
});

export default CustomHeaderChat;
