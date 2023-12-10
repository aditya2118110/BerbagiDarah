import React, { useState, useEffect,useCallback } from 'react';
import { View, StyleSheet, Text, Animated, ScrollView,TouchableOpacity,ActivityIndicator } from 'react-native';
import { Category2, Home, Message, Profile, Star1 } from 'iconsax-react-native';
import { fontType } from '../../theme';
import axios from 'axios';
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import Item from '../../commponent/Item';
const Event = () => {
  const navigation = useNavigation();
  const [scrollY] = useState(new Animated.Value(0));
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(true);
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const [productData, setProductData] = useState([]);
    const getDataProduct = async () => {
      try {
        const response = await axios.get(
          'https://657576cdb2fbb8f6509d1cc2.mockapi.io/berbagidarah/event',
        );
        setProductData(response.data);
        setLoading(false)
      } catch (error) {
          console.error(error);
      }
    };
    useFocusEffect(
      useCallback(() => {
        getDataProduct();
      }, [])
    );const [eventData, setEventData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const getDataEvent = async () => {
      try {
        const response = await axios.get(
          'https://657576cdb2fbb8f6509d1cc2.mockapi.io/berbagidarah/event',
        );
        setEventData(response.data);
        setLoading(false)
      } catch (error) {
          console.error(error);
      }
    };
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        getDataEvent()
        setRefreshing(false);
      }, 1500);
    }, []);
  
    useFocusEffect(
      useCallback(() => {
        getDataEvent();
      }, [])
    );
  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          backgroundColor: 'red',
          padding: 16,
          alignItems: 'center',
          opacity: headerOpacity,
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Event</Text>
      </Animated.View>

      <ScrollView
        style={{ flex: 1 }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={16}
      >
        {/* Rest of your components */}

        {/* "New Event" notification */}
        {showNotification && (
          <View
            style={{
              backgroundColor: 'white',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              marginHorizontal: 20,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: 'black' }}>New Event</Text>
          </View>
        )}
        {loading ? (
                <ActivityIndicator size={'large'} color={'black'}/>
              ) : (
                eventData.map((item, index) => <Item item={item} key={index}/>)
              )}
      </ScrollView>
      <TouchableOpacity style={{padding: 20, position:'absolute', top: 740,right: 20, backgroundColor:'red',borderRadius: 50}} onPress={() => navigation.navigate("AddEvent")}>
        <Category2 size="29"  color="#F7F7F7" variant='Bold'/>
    </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    elevation: 2,
    padding: 10,
  },
  icon: {
    fontSize: 24,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2:{
    width: 500,
    height: 355,
    backgroundColor: 'yellow'
  },
  container3:{
    height: 1000,
    marginTop: -5,
    backgroundColor: 'red',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container4:{
    height: 40,
    backgroundColor: 'white',
    color: 'black',
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container5:{
    height: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  container6:{
    flexDirection: 'row',
  },
  container7:{
    height: 1,
    backgroundColor: 'white',
    marginTop: -15,
    marginRight: 20,
    marginLeft: 20,
  },
  container8:{
    height: 1,
    backgroundColor: 'white',
    marginTop: 15,
    marginRight: 20,
    marginLeft: 20,
  },
  container9:{
    height: 50,
    backgroundColor: 'white',
    marginTop: 25,
    marginRight: 125,
    marginLeft: 125,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container10:{
    height: 80,
    backgroundColor: 'white',
    marginTop: 40,
    flexDirection: 'row',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: 'red'
  },
  title: {
    marginLeft: 55,
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: 'white',
  },
  logo: {
    width: 500,
    height: 355,
    resizeMode: 'cover',
  },
});

export default Event;
