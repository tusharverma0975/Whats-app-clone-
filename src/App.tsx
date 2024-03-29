// App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import attachment from './/assets/attachment.svg';
import SingleChatPage from './Components/ChatUI/SingleChatPage';
import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ViewStyle,
  Touchable,
  Image,
  Platform,
} from 'react-native';
import styles from './Drawer/Navigation/MainStyles';
import CustomHeader from './Drawer/Navigation/CustomHeader';
import * as Yup from 'yup';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomHeaderChat from './Components/CustomHeaderChat';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const HomeScreen = ({navigation}: any) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);
const ChatScreen= ({navigation}: any)=>{
  <View > <Text> Go to chat screen </Text>
  <Button title='Chat' onPress={()=> navigation.navigate('Chat')} /> 
  </View>
}


const DetailsScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
   
    <SingleChatPage /> 
  </View>
);

const SettingsScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Settings Screen</Text>
  </View>
);

const DrawerContent = ({navigation}: any) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Drawer Content</Text>
    <Button title="Close Drawer" onPress={() => navigation.closeDrawer()} />
    <Button title="Profile" onPress={() => navigation.navigate('Account')} />
  </View>
);

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen
      name="Home"
      component={HomeStackNavigator}
      options={{headerShown: false}}
    />
    <Drawer.Screen name="Tab" component={TabNavigator} />
    <Drawer.Screen name="Account" component={NotificationsScreen} />
  </Drawer.Navigator>
);

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => <CustomHeader />,
        headerShown: true,
      }}
    />
    <Stack.Screen name="Details" component={DetailsScreen}  options={{
        header: () => <CustomHeaderChat />
      }}  />
  </Stack.Navigator>
);




function NotificationsScreen() {
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.OuterContainer}>
          <View style={styles.buttonDiv}>
            <TouchableOpacity style={styles.tochableButtons}>
              <Text style={styles.buttonColor}>Profile </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subscriptionButton}>
              <Text style={styles.subscriptionButtonColor}>Subscription </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainerDiv}>
            <Image
              source={require('./pexels-pixabay-65894.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.emailDiv}>
            <Text style={styles.emailText}>tushar.verma@ziroh.com</Text>
          </View>
          <Separator />
          <View style={{width: '80%'}}>
            <View style={{marginTop: 20}}>
              <Text style={styles.formData}>Profile Information</Text>
              <Text style={styles.formDataValues}>First Name</Text>
            </View>
            <View>
              <TextInput style={styles.formDataValues2} />
            </View>

            <View style={{marginTop: 20}}>
              <Text style={styles.formDataValues3}>Last Name</Text>
            </View>
            <View>
              <TextInput style={styles.formDataValues2} />
            </View>

            <View style={{height: 20, marginTop: 20}}>
              <TextInput
                style={styles.formDataValues2}
                placeholder="Friendly ID"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Save </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Separator = () => <View style={styles.SeparatorStyles} />;

const App = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export default App;
