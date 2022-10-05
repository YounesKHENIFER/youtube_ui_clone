import {View, ImageBackground} from 'react-native';
import React from 'react';
import {Box, Text, VStack} from 'native-base';
import MenuIcon from '../icons/MenuIcon';

export default function Short({vid}) {
  return (
    <Box bg="gray.300" height="250px" w="140px">
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={{uri: vid.thumbnail}}>
        <VStack justifyContent="space-between" flex="1" p="10px">
          <Box alignSelf="flex-end">
            <MenuIcon size={18} color="white" />
          </Box>

          <Text color="white" fontSize="md" fontWeight="medium">
            {vid.title}
          </Text>
        </VStack>
      </ImageBackground>
    </Box>
  );
}
