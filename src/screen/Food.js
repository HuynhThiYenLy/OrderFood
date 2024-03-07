import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Food = () => {
  const navigation = useNavigation();
  const handleContinuePress = () => {
    console.log('Continue button pressed');
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/food.jpg')}
        style={{ width: '100%', height: 450 }}
      />
      <Text style={styles.text1}> Quick Food Delivery</Text>
      <Text style={styles.text2}>
        Loved the class! Such beautiful land and {'\n'} collective impact
        intrastructure sociol {'\n'} entrepreneur.{' '}
      </Text>

      <View style={styles.buttonSingin}>
        <TouchableOpacity style={styles.buttonSingin}>
          <Text style={styles.buttonLabelSingin}>SIGN IN WITH FACEBOOK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleContinuePress} style={styles.button}>
          <Text style={styles.buttonLabel}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.question}>
        <Text style={styles.text_question}>Or Start to</Text>
        <TouchableHighlight>
          <Text style={{ color: '#FE7F5E', fontWeight: '700', marginLeft: 10 }}>Search now</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Food;
const styles = StyleSheet.create({
  text_question: {
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 26,
    letterSpacing: 0.5,
    marginLeft: 90,
  },
  question: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FE7F5E',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  buttonLabelSingin: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  buttonSingin: {
    width: '100%',
    height: 45,
    backgroundColor: '#0000FF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  text2: {
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 26,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  container: {
    padding: 20,
    flex: 1,
  },
});