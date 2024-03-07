import { View, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

const Logo = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('GpsTracking'); // Replace 'GpsTracking' with the actual screen name
    }, 1000); // 1000 milliseconds = 1 second

    // Clear the timeout to avoid triggering the navigation if the component unmounts before 1 second
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../img/logoXTH.jpg')} style={styles.logoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE7F5E',
  },
  logoImage: {
    width: 200,
    height: 200,
  },
});

export default Logo;