import { View, Text } from 'react-native';
import design  from './ChatScreen';
import React from 'react';

const Message = ({ message }) => {
    const IsMyMessage =() =>{
    return message.user.id==='u1';
    };
  return (
    <View style={[design.container, {
        backgroundColor: IsMyMessage() ? '#DCF8C5' : 'white',
        alignSelf: IsMyMessage() ? 'flex-end' : 'flex-start',
      }]}>
      
      <Text style={ design.messageText}>{message.text}</Text>
      <Text style={design.time}>{message.createdAt}</Text>
    </View>
  );
};

export default Message;
