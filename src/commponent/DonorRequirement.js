import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DonorRequirement = (props) => {
  return (
    <View>
      <Text style={styles.donorRequirementText}>
        Jumlah Donor yang Dibutuhkan: {props.requiredDonors}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  donorRequirementText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default DonorRequirement;
