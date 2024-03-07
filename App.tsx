import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Logo from './src/screen/Logo';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import GpsTracking from './src/screen/GpsTracking';
import Home from './src/screen/Home';
import ForgetPassword from './src/screen/ForgetPassword';
import TabBottomNavigator from './src/screen/TabBottom';
import Cart from './src/screen/Cart';
import Checkout from './src/screen/Checkout';
import Food from './src/screen/Food';
import Review from './src/screen/Review';
const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập tại đây
    // Nếu đã đăng nhập, hãy cập nhật setIsLoggedIn(true)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'TabBottom' : 'Logo'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Logo" component={Logo} />
        <Stack.Screen name="GpsTracking" component={GpsTracking} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="TabBottom" component={TabBottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;