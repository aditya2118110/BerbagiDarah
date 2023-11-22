import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Animated, ScrollView } from 'react-native';
import { Home, Message, Profile, Star1 } from 'iconsax-react-native';
import { fontType } from '../../theme';
import ListEvent from '../../ListEvent';

const App = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const [showNotification, setShowNotification] = useState(false);

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const handleNewEvent = () => {
    // Call this function when a new event is posted
    setShowNotification(true);

    // You can also set a timeout to hide the notification after a certain duration
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Adjust the duration as needed
  };

  useEffect(() => {
    // Example: Call handleNewEvent when a new event is posted
    handleNewEvent();
  }, []); // You may need to call this based on your app's logic

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
        <ListEvent />

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
      </ScrollView>
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

export default App;
