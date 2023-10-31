// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, Picker } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service'; // Import geolokasi

// const Home = () => {
//   const [selectedBloodGroup, setSelectedBloodGroup] = useState('A');
//   const [userLocation, setUserLocation] = useState(null); // State untuk menyimpan lokasi pengguna

//   useEffect(() => {
//     // Dapatkan lokasi GPS pengguna
//     Geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error(error.message);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 1000,
//       }
//     );
//   }, []);

//   return (
//     <ScrollView style={styles.container}>
//       {/* ... (bagian komponen lainnya) */}
//       <MapView
//         style={styles.map}
//         region={{
//           latitude: userLocation ? userLocation.latitude : 0,
//           longitude: userLocation ? userLocation.longitude : 0,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         {userLocation && ( // Tampilkan marker jika lokasi pengguna sudah tersedia
//           <Marker
//             coordinate={{
//               latitude: userLocation.latitude,
//               longitude: userLocation.longitude,
//             }}
//             title="Lokasi Anda"
//           />
//         )}
//       </MapView>
//       <Text style={styles.label}>Pilih Golongan Darah:</Text>
//       <Picker
//         selectedValue={selectedBloodGroup}
//         onValueChange={(itemValue) => setSelectedBloodGroup(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="A" value="A" />
//         <Picker.Item label="B" value="B" />
//         <Picker.Item label="AB" value="AB" />
//         <Picker.Item label="O" value="O" />
//       </Picker>
//       <Text style={styles.registrationText}>
//         Golongan Darah Terpilih: {selectedBloodGroup}
//       </Text>
//       <Text style={styles.registrationText}>
//         {/* Tambahkan tombol registrasi online di sini */}
//       </Text>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//     margin: 10,
//   },
//   map: {
//     height: 200,
//   },
//   label: {
//     fontSize: 16,
//     margin: 10,
//   },
//   picker: {
//     height: 40,
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   registrationText: {
//     fontSize: 16,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

// export default Home;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Receipt21 , Notification, HambergerMenu, SearchNormal1, RowHorizontal, Home as HomeIcon, Message, Profile, Star1} from 'iconsax-react-native';
import { fontType } from '../../theme';

export default function Home(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HambergerMenu style={{color: 'white'}}></HambergerMenu>
        <Text style={styles.title}>BerbagiDarah</Text>
        <Receipt21 variant="Linear" size={20} />
        <Notification style={{color:'white'}}></Notification>
      </View>
      <View style={styles.container2}>
      <Image
        source={{
          uri: 'https://pp.walk.sc/tile/e/0/748x600/loc/lat=-7.978773/lng=112.618375.png', // Ganti dengan URL logo yang sesuai
        }}
        style={styles.logo}
      />
      </View>
      <View style={styles.container3}>
      <Text style={{color:'white', paddingTop: 20, paddingLeft: 20 ,}}>Mencari Donor</Text>
      <TextInput placeholder='Cari Lokasi' style={styles.container4}></TextInput>
      <SearchNormal1 style={{color: 'black', marginTop: -32, marginLeft: 365}}></SearchNormal1>
      <View style={styles.container5}></View>
      <Text style={{color:'white', paddingTop: 5, paddingLeft: 20 ,}}>Golongan Darah</Text>
      <View style={styles.container6}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/08/22/11/54/blood-group-2668685_1280.png', // Ganti dengan URL logo yang sesuai
        }}
        style={{width:100,height: 150}}/>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/08/22/11/56/blood-group-2668698_1280.png', // Ganti dengan URL logo yang sesuai
        }}
        style={{width:100,height: 150}}/>
        <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/08/22/11/55/blood-group-2668693_1280.png', // Ganti dengan URL logo yang sesuai
        }}
        style={{width:100,height: 150}}/>
        <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/08/22/11/54/blood-group-2668683_1280.png', // Ganti dengan URL logo yang sesuai
        }}
        style={{width:100,height: 150}}/>
      </View>
      <View style={styles.container7}></View>
      <View style={styles.container6}>
        <Text style={{color:'white', paddingTop: 20, paddingLeft: 125,}}>Rhesus</Text>
      </View>
      <View style={styles.container8}></View>
      <View style={styles.container9}>
      <Text style={{color:'black', paddingTop: 10, paddingLeft: 65,fontFamily: fontType['Pjs-Bold'], fontSize: 20}}>Cari</Text>
      </View>
      <View style={styles.container10}>
      <HomeIcon style={{color: 'black', marginTop: 22, marginLeft: 30}}/>
      <SearchNormal1 style={{color: 'black', marginTop: 22, marginLeft: 60}}></SearchNormal1>
      <Message style={{color: 'black', marginTop: 22, marginLeft: 60}}></Message>
      <Star1 style={{color: 'black', marginTop: 22, marginLeft: 70}}></Star1>
      <Profile style={{color: 'black', marginTop: 22, marginLeft: 50}}></Profile>
      </View>
      </View>
      <DonorCounter donorCount={10} />
      <DonorRequirement requiredDonors={50} />
      {/* <ListBlog /> */}
    </View>
  );
};

const styles = StyleSheet.create({
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
