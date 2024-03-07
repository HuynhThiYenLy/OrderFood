import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();

  const thanhToan = () => {
    navigation.navigate('Checkout');
  };
  const back = () => {
    navigation.navigate('Home');
  };

  const gioHang = [
    {
      id: '1',
      name: 'Red hot pizza',
      loai: 'Spicy chicken, beef',
      gia: 9.5,
      avatar: require('../img/pizza11.png'),
    },
    {
      id: '2',
      name: 'Spicy Pizza',
      loai: 'Spicy chicken, beef',
      gia: 9.5,
      avatar: require('../img/pizza1.png'),
    },
    {
      id: '3',
      name: 'Parata',
      loai: 'Spicy chicken, beef',
      gia: 9.5,
      avatar: require('../img/pizza2.png'),
    },
    {
      id: '4',
      name: 'Red hot pizza',
      loai: 'Spicy chicken, beef',
      gia: 9.5,
      avatar: require('../img/pizza21.png'),
    },
  ];

  // Tính tổng giá
  const initialTongGia = gioHang.reduce((acc, item) => acc + item.gia, 0);
  const [tongGia, setTongGia] = useState(initialTongGia);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Image
            source={require('../img/left.png')}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
        <Text style={styles.tieuDe}>Cart</Text>
        <Image
          source={require('../img/avata.png')}
          style={{ width: 40, height: 40, borderRadius: 10 }}
        />
      </View>
      <FlatList
        style={styles.listContainer}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={gioHang}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <View>
              <View style={styles.itemContainer}>
                <Image
                  source={item.avatar}
                  style={{ width: 80, height: 80, borderRadius: 10 }}
                />

                <View style={styles.thongTin}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.loai}>{item.loai}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.giaTien}>$ </Text>
                    <Text style={styles.gia}>{item.gia.toFixed(2)}</Text>
                  </View>
                </View>

                <View style={styles.soLuong}>
                  <Image
                    source={require('../img/tang.png')}
                    style={{ width: 25, height: 25 }}
                  />
                  <Text style={styles.so}>02</Text>
                  <Image
                    source={require('../img/giam.png')}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
              </View>
              {/* Đường gạch ngang, trừ phần tử cuối cùng */}
              {index !== gioHang.length - 1 && (
                <View style={styles.divider}></View>
              )}
            </View>
          );
        }}
      />

      <View style={styles.khungGia}>
        <View style={styles.tongTien}>
          <Text style={{ fontSize: 18, color: 'gray' }}>Total</Text>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            ${tongGia.toFixed(2)}
          </Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderColor: '#DDDDDD' }}></View>
        <Text style={{ fontSize: 18, color: 'gray', marginTop: 15 }}>
          Delivery Time
        </Text>
        <View style={styles.tongTien}>
          <Text style={{ fontSize: 18, color: 'black' }}>28 Feb 2023</Text>
          <Text style={{ fontSize: 18, color: 'black' }}>10:30 am</Text>
        </View>

        <TouchableOpacity style={styles.checkout} onPress={thanhToan}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  checkout: {
    padding: 20,
    backgroundColor: '#FF6600',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  tongTien: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  khungGia: {
    marginTop: 20,
  },
  so: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 8,
  },
  soLuong: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: 50,
  },
  giaTien: {
    color: '#FF6600',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 3,
  },
  gia: {
    color: '#000',
    fontSize: 18,
    marginTop: 4,
    fontWeight: 'bold',
  },
  loai: {
    color: 'gray',
    fontSize: 16,
    marginTop: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  thongTin: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  itemContainer: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  listContainer: {
    marginTop: 30,
    flexGrow: 0,
    height: 400,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    marginVertical: 10,
  },
  tieuDe: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});