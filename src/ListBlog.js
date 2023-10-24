// ListBlog.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Receipt21 } from 'iconsax-react-native';
import {colors} from './theme/colors';

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        {/* Donor Counter */}
        <DonorCounter donorCount={10} />

        {/* Donor Requirement */}
        <DonorRequirement requiredDonors={50} />

        {/* Blog Post 1 */}
        <View style={itemHorizontal.cardItem}>
          <ImageBackground
            style={itemHorizontal.cardImage}
            resizeMode="cover"
            imageStyle={{ borderRadius: 15 }}
            source={{
              uri: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
            }}>
            {/* Blog content */}
          </ImageBackground>
        </View>

        {/* Blog Post 2 */}
        {/* ... (similar structure for other blog posts) */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet
