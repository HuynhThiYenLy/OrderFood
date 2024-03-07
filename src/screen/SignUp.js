import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [mobileError, setMobileError] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleSignUp = () => {
    setEmailError(email.trim() === '');
    setPasswordError(password.trim() === '');
    setMobileError(mobile.trim() === '');

    if (
      !acceptTerms ||
      email.trim() === '' ||
      password.trim() === '' ||
      mobile.trim() === ''
    ) {
      return;
    }

    console.log('Đăng ký thành công!');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>SIGN UP</Text>
      <Text style={styles.text2}>
        Complete this step for the best adjustment
      </Text>
      <View style={styles.wapper}>
        <Text style={styles.text3}>Your Email</Text>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: emailError
                ? 'red'
                : email.trim() !== ''
                  ? 'green'
                  : 'gray',
            },
          ]}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="gray"
            onChangeText={text => setEmail(text)}
            onBlur={() => setEmailError(email.trim() === '')}
          />
          {emailError && (
            <Text style={styles.errorMessage}>Vui lòng nhập địa chỉ email</Text>
          )}
        </View>

        <Text style={styles.text3}>Password</Text>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: passwordError
                ? 'red'
                : password.trim() !== ''
                  ? '#81b0ff'
                  : 'gray',
            },
          ]}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            onChangeText={text => setPassword(text)}
            onBlur={() => setPasswordError(password.trim() === '')}
          />
          {passwordError && (
            <Text style={styles.errorMessage}>Vui lòng nhập mật khẩu</Text>
          )}
        </View>

        <Text style={styles.text3}>Mobile</Text>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: mobileError
                ? 'red'
                : mobile.trim() !== ''
                  ? '#81b0ff'
                  : 'gray',
            },
          ]}>
          <TextInput
            style={styles.input}
            placeholder="+188-1777-138-513"
            placeholderTextColor="gray"
            onChangeText={text => setMobile(text)}
            onBlur={() => setMobileError(mobile.trim() === '')}
          />
          {mobileError && (
            <Text style={styles.errorMessage}>Vui lòng nhập số điện thoại</Text>
          )}
        </View>

        <View style={styles.switchContainer}>
          <Switch
            style={styles.switch}
            onValueChange={() => setAcceptTerms(!acceptTerms)}
            value={acceptTerms}
          />
          <Text style={styles.text4}>I accept the terms</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonLabel}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.question}>
        <Text style={styles.text_question}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: '#FE7F5E',
              textDecorationLine: 'underline',
              fontSize: 15,
              marginRight: 60,
              fontWeight: '700',
              marginLeft: 5,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  text_question: {
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 26,
    letterSpacing: 0.5,
    marginLeft: 70,
  },
  question: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  switch: {
    marginTop: -5,
  },
  text4: {
    fontSize: 12,
  },
  trackColor: {
    false: '#767577',
    true: '#81b0ff',
  },

  switchContainer: {
    marginTop: 30,
    flexDirection: 'row',
  },
  text3: {
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: 'rgba(237, 235, 235,0.5)',
    borderRadius: 15,
    color: 'black',
    paddingHorizontal: 17,
    paddingVertical: 11,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 5,
  },
  errorMessage: {
    position: 'absolute',
    bottom: -18,
    left: 10,
    color: 'red',
    fontSize: 12,
  },
  wapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 15,
    height: 450,
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 50,
    color: 'black',
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
});