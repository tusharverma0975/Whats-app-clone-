import {ImageBackground, StyleSheet, Text, FlatList} from 'react-native';
import React from 'react';
import design from './ChatScreen';
import Message from './Message';
import messageData from '../../Components/ChatUI/data/messageData.json';
import InputTakingBox from './InputBox/inputBox';
import Svg, {Circle} from 'react-native-svg';

const SingleChatPage = () => {
  return (
    <ImageBackground
      source={require('../../assets/ChatBackground.png')}
      style={design.bg}>
      <FlatList
        data={messageData}
        renderItem={({item}) => <Message message={item} />}
        style={design.list}
        inverted
      />
      <InputTakingBox />
    </ImageBackground>
  );
};

export default SingleChatPage;
