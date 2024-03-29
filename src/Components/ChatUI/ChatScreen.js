import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {green} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const design = StyleSheet.create({
  bg: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  list: {
    padding: 10,
  },
  container: {
    // flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 20,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  messageText: {
    color: '#000000',
    fontSize: 10,
  },
  time: {
    color: 'grey',
    alignSelf: 'flex-end',
    fontSize: 6,
  },

  footer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    // borderRadius: 10,
    marginBottom: '3%',
    // backgroundColor: 'red',
    gap: 12,
  },
  inputContainer: {
    backgroundColor: 'whitesmoke',
    padding: 5,
    width: '80%',
    padding: 10,
    marginLeft: '2%',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputBox: {
    padding: 5,
  },

  send: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '8%',
  },
  backArrow: {
    padding: 20,
    marginTop: 70,
  },
  profileImage: {
    width: 50,
    height: 50,
    left: 40,
    
  },
});

export default design;
