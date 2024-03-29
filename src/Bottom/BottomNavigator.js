import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen3 from './Screen3'
import Screen2 from './Screen2'
import Screen1 from './Screen1'

const Tab= createBottomTabNavigator()
const BottomNavigator = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Screen1" component={Screen1}  options={{headerShown: false }} />
    <Tab.Screen name="Screen2" component={Screen2} options={{headerShown: false }} />
    <Tab.Screen name="Screen3" component={Screen3} options={{headerShown: false }} />
    
  </Tab.Navigator>
  )
}

export default BottomNavigator