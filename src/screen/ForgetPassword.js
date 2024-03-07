import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={myStyles.container}>
      <View>
        <Text style={myStyles.txtForgetPassword}>FORGET PASSWORD</Text>
        <Text style={myStyles.txtText}>
          Enter your email or phone to request a password reset
        </Text>
      </View>
      <View>
        <TextInput
          style={myStyles.input}
          placeholder="hellobesnik@gmail.com"
          placeholderTextColor="#697a8b"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View>
        <TouchableOpacity
          style={myStyles.btnForget}
          onPress={() => navigation.navigate('Home')}>
          <Text style={myStyles.btnLabel1}>SEND NOW</Text>
        </TouchableOpacity>
      </View>
      <View style={myStyles.helpContainer}>
        <Text style={myStyles.text2}>Having Problem ?</Text>
        <Pressable>
          <Text style={myStyles.btnHelpForget}> Nedd Help</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ForgetPassword;

const myStyles = StyleSheet.create({
  text2: {
    fontSize: 15,
    color: '#697a8b',
  },
  btnHelpForget: {
    color: '#FF6600',
    fontWeight: 'bold',
  },
  helpContainer: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  btnForget: {
    marginTop: 30,
    width: '100%',
    height: 50,
    backgroundColor: '#fe734c',
    borderColor: 10,
    borderRadius: 20,
  },
  btnLabel1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 50,
  },
  input: {
    width: '100%',
    height: 60,
    marginTop: 70,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    color: 'white',
    padding: 10,
  },
  txtText: {
    marginTop: 10,
    fontSize: 15,
    color: '#697a8b',
  },
  txtForgetPassword: {
    marginTop: 100,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    padding: 25,
  },
});