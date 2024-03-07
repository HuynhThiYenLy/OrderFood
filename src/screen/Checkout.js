import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Checkout = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const backScreen = () => {
    navigation.navigate('TabBottom');
  };

  const handleConfirm = () => {
    Alert.alert(
      'Thanh toán thành công !',
      'Chúng tôi rất vui khi bạn đã đặt hàng. Hãy đánh giá sản phẩm của chúng tôi.',
      [
        {
          text: 'No',
          onPress: () => backScreen(),

        },
        {
          text: 'Yes',
          onPress: () => navigation.navigate('Review'),
        },
      ],
    );
  };

  return (
    <View
      style={{
        padding: 10,
        paddingTop: 15,
        backgroundColor: 'white',
        height: '100%',
        width: '100px',
      }}>
      <View style={{ flexDirection: 'row', paddingBottom: 10, marginTop: 5 }}>
        <TouchableOpacity onPress={backScreen}>
          <Image
            source={require('../img/left.png')}
            style={{ width: 20, height: 30, marginLeft: 5 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 125,
          }}>
          Checkout
        </Text>
      </View>

      <Text
        style={{
          fontSize: 23,
          color: 'black',
          fontWeight: '500',
          marginTop: 30,
          marginLeft: 10,
        }}>
        Delivery Details
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 10,
        }}>
        <Text style={{ fontSize: 18, color: 'gray', marginTop: 20, width: 200 }}>
          To Ky Street, District 12, Ho Chi Minh City
        </Text>
        <Text style={{ fontSize: 18, color: '#FF6600', marginTop: 10 }}>
          Change
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 10,
        }}>
        <Text style={{ fontSize: 18, color: 'gray', marginTop: 20, width: 200 }}>
          +84 555 222 555
        </Text>
        <Text style={{ fontSize: 18, color: '#FF6600', marginTop: 10 }}>
          Change
        </Text>
      </View>

      <Text
        style={{
          fontSize: 23,
          color: 'black',
          fontWeight: '500',
          marginTop: 30,
          marginLeft: 10,
        }}>
        Payment Method
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 40 }}>
          <Image
            source={require('../img/add.png')}
            style={{ width: 30, height: 30, margin: 15 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}>
          <Image
            source={require('../img/checkout2.png')}
            style={{ width: 70, height: 44, margin: 5, marginTop: 8 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}>
          <Image
            source={require('../img/checkout3.png')}
            style={{ width: 40, height: 44, margin: 8 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}>
          <Image
            source={require('../img/checkout4.png')}
            style={{ width: 35, height: 45, margin: 8 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 25 }}>
        <CheckBox
          title="Use cash on delivery"
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          textStyle={{ fontSize: 20 }}
        />

        <Text style={{ marginLeft: 10, color: 'red' }}>
          {isChecked ? 'Checked!' : 'Unchecked!'}
        </Text>
      </View>

      <View style={{ marginTop: 5, marginHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, color: 'gray' }}>Delivery Fee</Text>
          <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>
            $ 5.30
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{ fontSize: 18, color: 'gray' }}>Total</Text>
          <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold' }}>
            $ 311.05
          </Text>
        </View>
      </View>

      <View
        style={{ height: 1, backgroundColor: '#DDDDDD', marginTop: 20 }}></View>

      <View style={{ marginTop: 20, marginHorizontal: 10 }}>
        <Text style={{ fontSize: 18, color: 'gray' }}>Delivery Time</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{ fontSize: 18, color: 'black' }}>14 Jan 2024</Text>
          <Text style={{ fontSize: 18, color: 'black' }}>10:30 am</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleConfirm}
        style={{
          backgroundColor: '#FF6633',
          marginTop: 50,
          padding: 15,
          borderRadius: 20,
          marginHorizontal: 30,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          CONFIRM
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});