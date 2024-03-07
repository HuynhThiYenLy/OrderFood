import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleLogin = () => {
    setEmailError(email.trim() === '');
    setPasswordError(password.trim() === '');

    if (email.trim() !== '' && password.trim() !== '') {
      navigation.navigate('TabBottom');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>LOGIN</Text>
      <Text style={styles.text2}>
        Complete this step for the best adjustment
      </Text>
      <View style={styles.wapper}>
        <Text style={styles.text3}>Your Email</Text>
        <View
          style={[
            styles.inputContainer,
            {
              borderWidth: 1,
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
            secureTextEntry={false}
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
              borderWidth: 1,
              borderColor: passwordError
                ? 'red'
                : password.trim() !== ''
                  ? 'green'
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

        <View style={styles.switchContainer}>
          <Switch
            style={styles.switch}
            value={isEnabled}
            onValueChange={toggleSwitch}
          />

          <Text style={styles.text4}>Remember Me</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.text5}>Quên Mật khẩu</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonLabel}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonSingin}>
        <TouchableOpacity style={styles.buttonSingin}>
          <Text style={styles.buttonLabelSingin}>SIGN IN WITH FACEBOOK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.question}>
        <Text style={styles.text_question}>I don't have an account?</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              color: '#FE7F5E',
              textDecorationLine: 'underline',
              fontSize: 15,
              marginRight: 60,
              fontWeight: '700',
            }}>
            Sign Up
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  text5: {
    textDecorationLine: 'underline',
    color: '#FE7F5E',
    fontWeight: '500',
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
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

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
    marginLeft: -60,
    fontSize: 12,
  },
  trackColor: {
    false: '#767577',
    true: '#81b0ff',
  },

  switchContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text3: {
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 48,
    color: 'black',
    backgroundColor: 'rgba(237, 235, 235,0.5)',
    borderRadius: 15,
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
    width: '100%',
    height: 340,
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