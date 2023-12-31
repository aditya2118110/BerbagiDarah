import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ProfileCircle, ArrowRight2, ArrowDown2 } from 'iconsax-react-native';

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      {/* Bagian Header */}
      <View style={{ backgroundColor: 'red', padding: 16, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Profile</Text>
      </View>

      {/* Bagian Avatar dan Informasi User */}
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        {/* Icon Avatar (ProfileCircle-Linear) */}
        <TouchableOpacity onPress={() => console.log('Tampilkan Gambar Profil')}>
          <ProfileCircle size={80} color="red" />
        </TouchableOpacity>

        {/* Nama User */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Nama User</Text>

        {/* Edit dan Navigasi ke Halaman Edit */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Text style={{ color: 'red', marginRight: 5 }}>Edit</Text>
            <ArrowRight2 size={20} color="red" />
          </View>
        </TouchableOpacity> */}
      </View>

      {/* Bagian Kartu Donor */}
      <View style={{ backgroundColor: 'red', padding: 16, marginBottom: 20 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Kartu Donor</Text>
        {/* Data Diri */}
        <View style={{ marginTop: 10 }}>
          {/* Render data diri (No.KTP, Nama, Jenis.Kel, Gol.Darah, Tgl.Lahir, Alamat, Domisili, No.Telp) */}
        </View>
      </View>

      {/* Bagian Rekam Medis */}
      <View style={{ backgroundColor: 'red', padding: 16, marginBottom: 20 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Rekam Medis</Text>
        {/* History Donor */}
        <TouchableOpacity onPress={() => navigation.navigate('HistoryDonor')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: 'white', marginRight: 5 }}>History Donor</Text>
            <ArrowRight2 size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Bagian FQA */}
      <View style={{ backgroundColor: 'red', padding: 16, marginBottom: 20 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>FQA</Text>
        {/* FQA Containers */}
        <TouchableOpacity onPress={() => console.log('Tampilkan Deskripsi FQA')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: 'white', marginRight: 5 }}>FQA 1</Text>
            <ArrowDown2 size={20} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Tampilkan Deskripsi FQA')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: 'white', marginRight: 5 }}>FQA 1</Text>
            <ArrowDown2 size={20} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Tampilkan Deskripsi FQA')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: 'white', marginRight: 5 }}>FQA 1</Text>
            <ArrowDown2 size={20} color="white" />
          </View>
        </TouchableOpacity>
        {/* Tambahkan FQA Containers lainnya sesuai kebutuhan */}
      </View>

    </ScrollView>
  );
};

export default Profile;
