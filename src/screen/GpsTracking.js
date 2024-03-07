import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const GpsTracking = () => {
  const navigation = useNavigation();

  const handleSkipPress = () => {
    console.log('Skip button pressed');
    // Add any additional actions you want to perform on Skip button press
  };

  const handleContinuePress = () => {
    console.log('Continue button pressed');
    navigation.navigate('Food'); // Chuyển hướng sang màn hình Home
  };

  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Text style={styles.skipText}>Skip</Text>
        <TouchableOpacity onPress={handleSkipPress}>
          <Image
            style={{ width: 25, height: 25, marginTop: 2, marginLeft: 10 }}
            source={require('../img/right.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Image in the Center */}
      <Image
        source={require('../img/GpsTracking.jpg')}
        style={styles.gpsImage}
      />

      {/* Text Line */}
      <Text style={styles.textLine}>GPS Tracking</Text>
      <Text style={styles.textLine2}>
        Loved the class! Such beautiful land and collective impact
        infrastructure social entrepreneur
      </Text>

      {/* Custom Button Below */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleContinuePress}>
        <Text style={styles.buttonTitle}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#fcfdff',
    padding: 20,
  },
  gpsImage: {
    marginTop: 200,
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  textLine: {
    fontSize: 25,
    marginVertical: 20,
    color: 'black',
    fontWeight: '800',
  },
  textLine2: {
    fontSize: 18,
    marginVertical: 20,
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
  },
  skipText: {
    fontSize: 20,
    color: '#FE7F5E',
    fontWeight: '700',
  },

  continueButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FE7F5E',
    borderRadius: 15,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  buttonTitle: {
    color: 'white',
    fontSize: 18,
    lineHeight: 50,
    textAlign: 'center',
    fontWeight: '500',
  },
});
export default GpsTracking;