import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Receipt21, Like1, Message } from 'iconsax-react-native';
import { colors } from './theme';

const ListEvent = () => {
  const [likes, setLikes] = useState(0);
  const [messages, setMessages] = useState(0);
  const [likeColor, setLikeColor] = useState('white');
  const [messageColor, setMessageColor] = useState('white');

  const contentData = [
    {
      description: 'Palang Merah Indonesia (PMI) Kota Malang menggelar apel bersama dalam rangka HUT ke-78 Markas PMI Kota Malang.',
      image: 'https://malangkota.go.id/wp-content/uploads/2023/09/Wali-Kota-Malang-menjadi-anggota-kehormatan-PMI-Kota-Malang.jpeg', // Ganti dengan URL gambar yang sesuai
    },
    {
      description: 'Palang Merah Indonesia (PMI) Kota Malang menggelar apel bersama dalam rangka HUT ke-78 Markas PMI Kota Malang.',
      image: 'https://malangkota.go.id/wp-content/uploads/2023/09/Wali-Kota-Malang-menjadi-anggota-kehormatan-PMI-Kota-Malang.jpeg', // Ganti dengan URL gambar yang sesuai
    },
    {
      description: 'Palang Merah Indonesia (PMI) Kota Malang menggelar apel bersama dalam rangka HUT ke-78 Markas PMI Kota Malang.',
      image: 'https://malangkota.go.id/wp-content/uploads/2023/09/Wali-Kota-Malang-menjadi-anggota-kehormatan-PMI-Kota-Malang.jpeg', // Ganti dengan URL gambar yang sesuai
    },
    {
      description: 'Palang Merah Indonesia (PMI) Kota Malang menggelar apel bersama dalam rangka HUT ke-78 Markas PMI Kota Malang.',
      image: 'https://malangkota.go.id/wp-content/uploads/2023/09/Wali-Kota-Malang-menjadi-anggota-kehormatan-PMI-Kota-Malang.jpeg', // Ganti dengan URL gambar yang sesuai
    },
    {
      description: 'Palang Merah Indonesia (PMI) Kota Malang menggelar apel bersama dalam rangka HUT ke-78 Markas PMI Kota Malang.',
      image: 'https://malangkota.go.id/wp-content/uploads/2023/09/Wali-Kota-Malang-menjadi-anggota-kehormatan-PMI-Kota-Malang.jpeg', // Ganti dengan URL gambar yang sesuai
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {contentData.map((content, index) => (
        <View style={styles.blogItem} key={index}>
          <ImageBackground
            source={{
              uri: content.image,
            }}
            style={styles.image}
          >
            <Text style={styles.title}>{content.title}</Text>
          </ImageBackground>
          <Text style={styles.description}>{content.description}</Text>

          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                setLikes(likes + 1);
                setLikeColor('red');
              }}
              style={styles.iconButton}
            >
              <Like1 style={[styles.icon, { color: likeColor }]} />
              <Text>{likes}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setMessages(messages + 1);
                setMessageColor('green');
              }}
              style={styles.iconButton}
            >
              <Message style={[styles.icon, { color: messageColor }]} />
              <Text>{messages}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  blogItem: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    height: 200,
    width : 365,
    marginLeft: 20,
    marginTop: 20,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: colors.black,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
  },
  description: {
    fontSize: 16,
    margin: 10,
    paddingHorizontal: 20,
    textAlign: 'justify',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
    color: 'white',
  },
});

export default ListEvent;
