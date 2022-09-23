import React from 'react';
import {HStack, Text} from 'native-base';
import {NativeModules} from 'react-native';
import SearchIcon from '../../icons/SearchIcon';
import MenuIcon from '../../icons/MenuIcon';
const {StatusBarManager} = NativeModules;

export default function Header() {
  return (
    <HStack
      alignItems="center"
      px="10px"
      bg="#008069"
      pt={StatusBarManager.HEIGHT + 'px'}
      pb="15px">
      <Text fontWeight="medium" flex="1" fontSize="2xl" color="#fff">
        WhatsApp
      </Text>

      {/* icons */}
      <HStack alignItems="center" space="20px">
        <SearchIcon color="white" size={25} />
        <MenuIcon color="white" size={25} />
      </HStack>
    </HStack>
  );
}
