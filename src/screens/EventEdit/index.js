import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect, } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    ActivityIndicator
} from "react-native";
import { Category, DirectboxSend, Image, Notification, SearchNormal1,Add,AddSquare,ArrowLeft } from 'iconsax-react-native'
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import { fontType,colors } from "../../theme";
import FastImage from "react-native-fast-image";
const EventEdit = ({route}) => {
  const {eventId} = route.params;
    const [itemData, setItemData] = useState({
        title: '',
        description: '',
        totalLikes: 0,
        totalComments: 0,
      });
      const handleChange = (key, value) => {
        setItemData({
          ...itemData,
          [key]: value,
        });
      };
      const [image, setImage] = useState(null);
      const navigation = useNavigation();
      const [oldImage, setOldImage] = useState(null);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const subscriber = firestore()
          .collection('blog')
          .doc(eventId)
          .onSnapshot(documentSnapshot => {
            const events = documentSnapshot.data();
            if (events) {
              console.log('Blog data: ', events);
              setItemData({
                title: events.title,
                description: events.description,
              });
              setOldImage(events.image);
              setImage(events.image);
              setLoading(false);
            } else {
              console.log(`Event with ID ${eventId} not found.`);
            }
          });
        setLoading(false);
        return () => subscriber();
      }, [eventId]);
    
      const handleImagePick = async () => {
        ImagePicker.openPicker({
          width: 1920,
          height: 1080,
          cropping: true,
        })
          .then(image => {
            console.log(image);
            setImage(image.path);
          })
          .catch(error => {
            console.log(error);
          });
      };
    
      const handleUpdate = async () => {
        setLoading(true);
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`images/${filename}`);
        try {
          if (image !== oldImage && oldImage) {
            const oldImageRef = storage().refFromURL(oldImage);
            await oldImageRef.delete();
          }
          if (image !== oldImage) {
            await reference.putFile(image);
          }
          const url =
            image !== oldImage ? await reference.getDownloadURL() : oldImage;
          await firestore().collection('blog').doc(eventId).update({
            title: itemData.title,
            description: itemData.description,
            image: url,
          });
          setLoading(false);
          console.log('Event Updated!');
          navigation.navigate('Event', {eventId});
        } catch (error) {
          console.log(error);
        }
      };
    
  return (
    <View style={{flex: 1,}}>
                      <View style={styles.header}>
            <TouchableOpacity>
                <View style={{marginLeft: 10,}}>
                <ArrowLeft size="30" color="white"/>
                </View>
            </TouchableOpacity>
            <Text style={{fontFamily: fontType['Pjs-ExtraBold'],fontSize: 20,color: 'white'}}>EDIT</Text>
            </View>
            <ScrollView>
            {image ? (
          <View style={{position: 'relative'}}>
            <FastImage
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: colors.blue(),
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color={colors.white()}
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                textInput.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color={colors.grey(0.6)} variant="Linear" size={42} />
              <Text
                style={{
                  fontFamily: fontType['Pjs-Regular'],
                  fontSize: 12,
                  color: colors.grey(0.6),
                }}>
                Upload Thumbnail
              </Text>
            </View>
          </TouchableOpacity>
        )}
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Judul"
                    value={itemData.title}
                    onChangeText={(text) => handleChange("title", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="Deskripsi"
                    value={itemData.description}
                    onChangeText={(text) => handleChange("description", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                {loading && (
            <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="blue" />
            </View>
            )}
            </ScrollView>
            <TouchableOpacity onPress={handleUpdate} style={styles.buttonUpload}>
                <Text style={{fontFamily: fontType['Pjs-ExtraBold'],fontSize: 15}}>Save</Text>
            </TouchableOpacity>
        </View>
  )
}

export default EventEdit
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    flexDirection: 'row',
    gap: 130,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  headerTitle: {
    fontFamily: fontType['NS-ExtraBold'],
    fontSize: 23,
  },
  buttonUpload:{
      backgroundColor: 'red',
      padding: 15, 
      flexDirection: 'row',
      alignItems: 'center', 
      gap: 12, 
      paddingHorizontal: 50,
      marginHorizontal: 120, 
      borderRadius: 14, 
      position: 'absolute', 
      top: 775,
      left:30
  }
})
const textInput = StyleSheet.create({
  title:{
      fontSize: 14,
      color: 'black'
  },
  board: {
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 20,
  },
  boardDescription: {
      padding: 10,
      marginVertical: 10,
      marginTop: -5,
      marginHorizontal: 20,
  }
})