import { useNavigation } from "@react-navigation/native";
import { Setting,SearchNormal1,Notification, AddCircle,ChartCircle, ArrowLeft } from "iconsax-react-native";
import React, { useState } from "react";
import axios from 'axios';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from "react-native";
import {fontType} from '../../theme';
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
            setLoading(true);
            try {
              await axios.post('https://657576cdb2fbb8f6509d1cc2.mockapi.io/berbagidarah/event', {
                  title: itemData.title,
                  description: itemData.description,
                  image,
                  totalComments: itemData.totalComments,
                  totalLikes: itemData.totalLikes,
                  createdAt: new Date(),
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
              setLoading(false);
              navigation.navigate('Event');
            } catch (e) {
              console.log(e);
            }
          };
        const handleChange = (key, value) => {
            setitemData({
            ...itemData,
            [key]: value,
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
                <View style={textInput.board}>
                    <TextInput
                    placeholder="URL."
                    value={itemData.image}
                    onChangeText={(text) => setImage(text)}
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