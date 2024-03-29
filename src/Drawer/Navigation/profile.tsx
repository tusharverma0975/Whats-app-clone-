import React from 'react';
import { View, TextInput, KeyboardAvoidingView, ScrollView , Text, StyleSheet } from 'react-native';
const profile = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 20 }}
                placeholder="Enter text here"
              />
            
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      );
}

export default profile

const styles = StyleSheet.create({})