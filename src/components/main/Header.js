import React from 'react';
import {Avatar, HStack, Text} from 'native-base';
import {Image, NativeModules} from 'react-native';
import SearchIcon from '../../icons/SearchIcon';
import CastIcon from '../../icons/CastIcon';
import NotifIcon from '../../icons/NotificationIcon';

export default function Header() {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      px="10px"
      pb="15px">
      <Image
        style={{
          height: 25,
          width: 100,
          resizeMode: 'contain',
        }}
        source={{
          uri: 'https://www.youtube.com/img/desktop/supported_browsers/yt_logo_rgb_light.png',
        }}
      />

      {/* icons */}
      <HStack alignItems="center" space="20px">
        <CastIcon color="black" size={25} />
        <NotifIcon color="black" size={25} />
        <SearchIcon color="black" size={25} />
        <Avatar size="sm" bg="orange.500">
          TO
        </Avatar>
      </HStack>
    </HStack>
  );
}
