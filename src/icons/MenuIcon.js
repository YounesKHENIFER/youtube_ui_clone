import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function Menu(props) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Ionicons name="ios-ellipsis-vertical" {...props} />
    </TouchableOpacity>
  );
}
