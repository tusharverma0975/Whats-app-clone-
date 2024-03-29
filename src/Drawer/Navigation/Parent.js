// Parent.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Parent = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Parent Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default Parent;
