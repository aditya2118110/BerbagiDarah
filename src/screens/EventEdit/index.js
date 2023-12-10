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
import { Category, DirectboxSend, Image, Notification, SearchNormal1 } from 'iconsax-react-native'
import axios from 'axios';
import { fontType } from "../../theme";
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
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        getEventData();
      }, [eventId]);
    
      const getEventData = async () => {
        try {
          const response = await axios.get(
            `https://657576cdb2fbb8f6509d1cc2.mockapi.io/berbagidarah/event/${eventId}`,
          );
          setItemData({
            title : response.data.title,
            description : response.data.description,
            image : response.data.image,
          })
        setImage(response.data.image)
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      const handleUpdate = async () => {
        setLoading(true);
        try {
          await axios
            .put(`https://657576cdb2fbb8f6509d1cc2.mockapi.io/berbagidarah/event/${eventId}`, {
              title: itemData.title,
              image,
              description: itemData.description,
              price : itemData.duration,
              totalComments: itemData.totalComments,
              totalLikes: itemData.totalLikes,
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
  return (
    <View style={{flex: 1,}}>
            <View style={{flexDirection: 'row',alignItems: 'center',padding: 20, justifyContent:'flex-end', gap: 28}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
                        <SearchNormal1 size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Mailbox")}>
                        <Notification size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
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
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="URL."
                    value={image}
                    onChangeText={(text) => setImage(text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleUpdate} style={styles.buttonUpload}>
                <Text style={{fontFamily: fontType['Pjs-ExtraBold'],fontSize: 15}}>Save</Text>
            </TouchableOpacity>
            {loading && (
            <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="blue" />
            </View>
            )}
        </View>
  )
}

export default EventEdit
const styles = StyleSheet.create({
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