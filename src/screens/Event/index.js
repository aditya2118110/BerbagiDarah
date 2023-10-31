import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Home, Message, Profile, Star1 } from 'iconsax-react-native';

import DonorCounter from '../../commponent/DonorCounter';
import DonorRequirement from '../../commponent/DonorRequirement';
import ListBlog from '../../ListBlog';
import { fontType } from '../../theme';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Event'); // Default page is 'Event'

  // const renderPage = () => {
    // Render the appropriate component based on the currentPage state
    // switch (currentPage) {
    //   case 'Home':
    //     return <Home />;
    //   case 'Message':
    //     return <Message />;
    //   case 'Profile':
    //     return <Profile />;
    //   case 'Event':
  //       return (
  //         <ScrollView>
  //           <ListBlog />
  //         </ScrollView>
  //       );
  //     default:
  //       return (
  //         <ScrollView>
  //           <View>
  //             <ListBlog />
  //           </View>
  //         </ScrollView>
  //       );
  //   }
  // };

  return (
    
      
      
        
           <ListBlog />
        
      
    
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
