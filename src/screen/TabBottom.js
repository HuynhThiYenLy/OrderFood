import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './Home';
import Cart from './Cart';
import FoodMenu from './FoodMenu';
import MyOrder from './MyOder';
import Place from './Place';

const Tab = createBottomTabNavigator();

const tabScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarStyle: { backgroundColor: 'rgba(12, 15, 20, 1)' },
    tabBarIcon: ({ focused }) => {
      if (route.name === 'Home') {
        return focused ? (
          <Image style={styles.icon} source={require('../img/homeColor.png')} />
        ) : (
          <Image style={styles.icon} source={require('../img/home.png')} />
        );
      } else if (route.name === 'FoodMenu') {
        return focused ? (
          <Image style={styles.icon} source={require('../img/foodemenu.png')} />
        ) : (
          <Image
            style={styles.icon}
            source={require('../img/foodmenuWhite.png')}
          />
        );
      } else if (route.name === 'Cart') {
        return focused ? (
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../img/shopcartColor.png')}
          />
        ) : (
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../img/shopcart.png')}
          />
        );
      } else if (route.name === 'MyOder') {
        return focused ? (
          <Image style={styles.icon} source={require('../img/noti.png')} />
        ) : (
          <Image style={styles.icon} source={require('../img/notiwhite.png')} />
        );
      } else if (route.name === 'Place') {
        return focused ? (
          <Image
            style={styles.icon}
            source={require('../img/placeColor.png')}
          />
        ) : (
          <Image
            style={styles.icon}
            source={require('../img/placewhite.png')}
          />
        );
      }
    },
    tabBarLabel: () => null,
  };
};

const TabBottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Place" component={Place} />
      <Tab.Screen name="FoodMenu" component={FoodMenu} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="MyOder" component={MyOrder} />

    </Tab.Navigator>
  );
};

export default TabBottomNavigator;
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});