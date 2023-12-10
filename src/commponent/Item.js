import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import {useNavigation} from '@react-navigation/native';
import { fontType } from '../theme';
const Item = ({item}) => {
  const navigation = useNavigation();
  return (
      <TouchableOpacity onPress={() => navigation.navigate('EventDetail', {eventId: item.id})}>
              <View style={{flexDirection: 'row', gap:15, padding: 30, backgroundColor: '#FFF8D4', marginHorizontal: 10, borderRadius: 20, marginVertical: 10}}>
                <FastImage style={styles.image}
                source={{uri: item?.image,
                headers:{Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}/>
                  <View style={{flexWrap: 'wrap', flexDirection: 'column'}}>
                    <Text style={{fontFamily: fontType['Pjs-Medium'],color: "black",fontSize:20}}>{item?.title}</Text>
                    <Text style={{fontFamily: fontType['Pjs-Regular'],color: "black"}}>{item?.description}</Text>
                  </View>
              </View>
      </TouchableOpacity>
  )
}

export default Item

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: 120,
        height: 150
    },
})