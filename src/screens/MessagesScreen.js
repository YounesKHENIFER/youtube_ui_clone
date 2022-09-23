import React from 'react';
import {Avatar, Center, Fab, FlatList, Text} from 'native-base';
import Message from '../components/chats/Message';
import MessageIcon from '../icons/MessageIcon';

const messages = [
  {
    user: {
      avatar:
        'https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'seen',
    time: '15:30 PM',
  },
  {
    user: {
      avatar:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'recieved',
    time: '15:30 PM',
  },
  {
    user: {
      avatar:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'unreceived',
    time: '15:30 PM',
  },
  {
    user: {
      avatar:
        'https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=360',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'seen',
    time: '15:30 PM',
  },
  {
    user: {
      avatar:
        'https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'seen',
    time: '15:30 PM',
  },
  {
    user: {
      avatar:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'recieved',
    time: '15:30 PM',
  },
  {
    user: {
      avatar:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'unreceived',
    time: '15:30 PM',
  },
  {
    user: {
      avatar:
        'https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=360',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'seen',
    time: '15:30 PM',
  },
  {
    user: {
      avatar:
        'https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'seen',
    time: '15:30 PM',
  },
  {
    user: {
      avatar:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'recieved',
    time: '15:30 PM',
  },
  {
    user: {
      avatar:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'unreceived',
    time: '15:30 PM',
  },
  {
    user: {
      avatar:
        'https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=360',
      username: 'John Doe',
    },
    message: 'hi , how do you think whatsapp is',
    seen: 'seen',
    time: '15:30 PM',
  },
];
export default function MessagesScreen() {
  return (
    <>
      <FlatList
        pt="20px"
        data={messages}
        keyExtractor={(item, i) => i}
        renderItem={({item}) => <Message message={item} />}
        ListFooterComponent={
          <Center my="30px" mb="100px">
            <Text fontSize="xs" color="gray.600" fontWeight="bold">
              Tap And Hold On Message To See Options
            </Text>
          </Center>
        }
      />
      <Fab
        bg="#008069"
        placement="bottom-right"
        colorScheme="#008069"
        size="lg"
        icon={<MessageIcon color="#fff" size={25} />}
        mb="50px"
        mr="10px"
      />
    </>
  );
}
