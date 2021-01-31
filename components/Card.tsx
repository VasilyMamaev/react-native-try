import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { PostType } from '../types/model';

const Card: React.FC<PostType> = ({ userName, userAvatar, photo, text, children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.userInfo}>
        <Image style={styles.userAvatar} source={{ uri: userAvatar }} />
        <Text>{userName}</Text>
      </View>
      <View style={styles.photoContainer}>
        <Image style={styles.photo} source={{ uri: photo }} />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Лайк" onPress={() => Alert.alert(`На данный момент оценить фотографию пользователя ${userName} невозможно`)} />
      </View>
      <View>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

Card.defaultProps = {
  userAvatar: 'https://picsum.photos/id/723/40',
  photo: 'https://picsum.photos/id/723/500',
};

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    width: 500,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    marginHorizontal: 10,
  },
  photoContainer: {
    aspectRatio: 1,
  },
  btnContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  photo: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Card;
