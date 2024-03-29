// CustomHeader.js

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DrawerIcon from './Arrow';

const CustomHeader = () => {
  const navigation = useNavigation();

  const handleDrawerOpen = () => {
    navigation.openDrawer();
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 10  }}>
      <TouchableOpacity onPress={handleDrawerOpen}>
       
        <DrawerIcon color="#000" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
