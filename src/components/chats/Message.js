import React from 'react';
import {Avatar, Box, HStack, Text, VStack} from 'native-base';
import CheckIcon from '../../icons/CheckIcon';
export default function Message({message}) {
  return (
    <HStack space="10px" px="10px" py="5px" mb="10px" alignItems="center">
      <Avatar source={{uri: message.user.avatar}} size="md" />
      <Box flex="1">
        {/* username */}
        <Text fontWeight="medium" fontSize="md">
          {message.user.username}
        </Text>
        {/* message */}
        <HStack w="full" alignItems="center" space="5px">
          {message.seen !== 'unreceived' && (
            <CheckIcon
              size={22}
              color={message.seen === 'seen' ? 'green' : 'gray'}
            />
          )}
          <Box flex="1">
            <Text>{message.message.substring(0, 30)}...</Text>
          </Box>

          {/* time */}
          <Text> {message.time}</Text>
        </HStack>
      </Box>
    </HStack>
  );
}
