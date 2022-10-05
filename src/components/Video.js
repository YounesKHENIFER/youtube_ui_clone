import {View, ImageBackground} from 'react-native';
import React from 'react';
import {Avatar, Box, HStack, Text, VStack} from 'native-base';
import MenuIcon from '../icons/MenuIcon';
export default function Video({vid}) {
  return (
    <VStack mb="5px">
      {/* image */}
      <ImageBackground
        source={{uri: vid.thumbnail}}
        style={{
          width: '100%',
          position: 'relative',
          height: 220,
        }}>
        <Text
          color="white"
          bg="black"
          rounded="lg"
          px="3px"
          py="2px"
          position="absolute"
          bottom="10px"
          right="10px">
          {vid.duration}
        </Text>
      </ImageBackground>

      {/* infos */}
      <HStack alignItems="center" py="10px" px="10px" space="10px">
        <Avatar size="45px" source={{uri: vid.avatar}} />

        {/* title */}
        <VStack flex="1">
          <Text fontSize="16px" fontWeight="medium">
            {vid.title}
          </Text>
          <Text color="gray.500" fontSize="13px" fontWeight="medium">
            {vid.username} - {vid.views_count} views - {vid.createdAt}
          </Text>
        </VStack>

        {/* icon */}
        <MenuIcon size={18} color="gray" />
      </HStack>
    </VStack>
  );
}
