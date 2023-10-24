import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DonorCounter = (props) => {
  return (
    <View>
      <Text style={styles.donorCountText}>
        Jumlah Donor Saat Ini: {props.donorCount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  donorCountText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default DonorCounter;
