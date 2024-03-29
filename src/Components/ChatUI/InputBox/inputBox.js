import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Attachment from '../../../assets/attachment.svg';
import Send from '../../../assets/Send.svg';
import design from '../ChatScreen';
import styles from '../../../Drawer/Navigation/MainStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const InputTakingBox = () => {
  return (
    <View style={design.footer}>
      <View style={design.inputContainer}>
        <TextInput placeholder="Message..." style={design.inputBox} />
        <Attachment style={design.attachment} />
      </View>

      <TouchableOpacity style={design.send}>
        <Send  />
      </TouchableOpacity>
    </View>
  );
};

export default InputTakingBox;
