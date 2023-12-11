import { useNavigation } from "@react-navigation/native";
import { Setting,SearchNormal1,Notification, AddCircle,ChartCircle, ArrowLeft,Add,AddSquare } from "iconsax-react-native";
import React, { useState } from "react";
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from "react-native";
import {colors, fontType} from '../../theme';
import FastImage from "react-native-fast-image";
const AddEvent = () => {
    const [loading, setLoading] = useState(false);
        const [itemData, setitemData] = useState({
            title: "",
            description: "",
            createdAt: '',
            totalLikes: 0,
            totalComments: 0,
        });
        const handleUpload = async () => {
            let filename = image.substring(image.lastIndexOf('/') + 1);
            const extension = filename.split('.').pop();
            const name = filename.split('.').slice(0, -1).join('.');
            filename = name + Date.now() + '.' + extension;
            const reference = storage().ref(`blogimages/${filename}`);
        
            setLoading(true);
            try {
              await reference.putFile(image);
              const url = await reference.getDownloadURL();
              await firestore().collection('blog').add({
                title: itemData.title,
                image: url,
                description: itemData.description,
                totalComments: itemData.totalComments,
                totalLikes: itemData.totalLikes,
                createdAt: new Date(),
              });
              setLoading(false);
              console.log('Item added!');
              navigation.navigate('Event');
            } catch (error) {
              console.log(error);
            }
          };
        const handleChange = (key, value) => {
            setitemData({
            ...itemData,
            [key]: value,
            });
        };
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
        const [image, setImage] = useState(null);
        const navigation = useNavigation();
    return (
            <View style={{flex: 1}}>
                <View style={styles.header}>
            <TouchableOpacity>
                <View style={{marginLeft: 10,}}>
                <ArrowLeft size="30" color="white"/>
                </View>
            </TouchableOpacity>
            <Text style={{fontFamily: fontType['Pjs-ExtraBold'],fontSize: 20,color: 'white'}}>POST</Text>
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
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Deskripsi"
                    value={itemData.description}
                    onChangeText={(text) => handleChange("description", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleUpload} style={{paddingHorizontal: 60,backgroundColor: 'red',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 800,left:10}}>
                <Text>Upload</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddEvent

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
})
const textInput = StyleSheet.create({
    title:{
        fontSize: 20,
        fontFamily: fontType['NS-Medium'],
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