import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import { PostType } from './types/model';

const posts: PostType[] = [
  { userName: '1', userAvatar: 'https://picsum.photos/40', photo: 'https://picsum.photos/500', text: 'some text blablablablablabla' },
  { userName: '2', userAvatar: 'https://picsum.photos/40', photo: 'https://picsum.photos/500', text: 'some text blablablablablabla' },
  { userName: '3', userAvatar: 'https://picsum.photos/40', photo: 'https://picsum.photos/500', text: 'some text blablablablablabla' },
  { userName: '4', userAvatar: 'https://picsum.photos/40', photo: 'https://picsum.photos/500', text: 'some text blablablablablabla' },
  { userName: '5', userAvatar: 'https://picsum.photos/40', photo: 'https://picsum.photos/500', text: 'some text blablablablablabla' },
  { userName: '6', userAvatar: 'https://picsum.photos/40', photo: 'https://picsum.photos/500', text: 'some text blablablablablabla' },
  { userName: '7', userAvatar: 'https://picsum.photos/40', photo: 'https://picsum.photos/500', text: 'some text blablablablablabla' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {posts.map((post, i) => (
          <Card userName={post.userName} userAvatar={post.userAvatar} photo={post.photo} text={post.text} key={i} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
