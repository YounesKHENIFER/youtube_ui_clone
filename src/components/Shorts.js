import React from 'react';
import videos from '../data/videos';
import Short from './Short';
import {Box, FlatList} from 'native-base';
export default function Shorts() {
  return (
    <FlatList
      pl="10px"
      mb="15px"
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={<Box w="10px" />}
      horizontal
      data={videos.reverse()}
      keyExtractor={(item, i) => item.title}
      renderItem={({item}) => <Short vid={item} />}
    />
  );
}
