import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/main/Header';
import {FlatList} from 'native-base';
import videos from '../data/videos';
import Video from '../components/Video';
import Shorts from '../components/Shorts';
export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />

      <FlatList
        ListHeaderComponent={
          <>
            <Video vid={videos[0]} />
            <Shorts />
          </>
        }
        data={videos.slice(1)}
        keyExtractor={(item, i) => item.title}
        renderItem={({item}) => <Video vid={item} />}
      />
    </SafeAreaView>
  );
}
