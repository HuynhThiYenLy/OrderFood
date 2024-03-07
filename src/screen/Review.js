import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Review = () => {
  const [text, setText] = useState('');

  const navigation = useNavigation();

  const backScreen = () => {
    navigation.navigate('Checkout');
  };

  return (
    <View style={{ padding: 10, paddingTop: 15, backgroundColor: 'white', height: '100%' }}>
      <View style={{ flexDirection: 'row', paddingBottom: 10, marginTop: 5 }}>
        <TouchableOpacity onPress={backScreen}>
          <Image
            source={require('../img/left.png')}
            style={{ width: 20, height: 30, marginLeft: 5 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginLeft: 140 }}>Review</Text>
      </View>

      <ScrollView style={{ height: 200 }}>
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../img/rev1.png')}
              style={{ width: 55, height: 50, marginLeft: 5 }}
            />
            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
              <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Nathasa Malkuba</Text>
              <Text style={{ color: 'gray', fontSize: 16 }}>31/12/2023</Text>
            </View>
            <Image
              source={require('../img/menu.png')}
              style={{ width: 10, height: 20, marginLeft: 142, marginTop: 5 }}
            />
          </View>
          <Text style={{ marginTop: 5, color: '#000', fontSize: 18, padding: 10, lineHeight: 30, fontFamily: 'Arial' }}>
            Loved the class! Such beautiful land and collective impact infrastructure
            social entrepreneurship mass incarceration.
          </Text>
        </View>

        {/* Các phần review khác ở đây */}

        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../img/rev2.png')}
              style={{ width: 55, height: 50, marginLeft: 5 }}
            />
            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
              <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Furinai Millabi</Text>
              <Text style={{ color: 'gray', fontSize: 16 }}>19/12/2023</Text>
            </View>
            <Image
              source={require('../img/menu.png')}
              style={{ width: 10, height: 20, marginLeft: 172, marginTop: 5 }}
            />
          </View>
          <Text style={{ marginTop: 5, color: '#000', fontSize: 18, padding: 10, lineHeight: 30, fontFamily: 'Arial' }}>
            Never run so well and it's all thanks to Jordan. Silo framework overcome justice
            ideate, citizen-centered effective.
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../img/rev3.png')}
              style={{ width: 55, height: 50, marginLeft: 5 }}
            />
            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
              <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Sami Rafi</Text>
              <Text style={{ color: 'gray', fontSize: 16 }}>1/12/2023</Text>
            </View>
            <Image
              source={require('../img/menu.png')}
              style={{ width: 10, height: 20, marginLeft: 213, marginTop: 5 }}
            />
          </View>
          <Text style={{ marginTop: 5, color: '#000', fontSize: 18, padding: 10, lineHeight: 30, fontFamily: 'Arial' }}>
            Big up my running crew, they better not say running crew who! Commitment equal opportunity empower.
          </Text>
        </View>
      </ScrollView>

      <View style={{ position: 'relative' }}>
        <Image
          source={require('../img/rev2.png')}
          style={{
            top: 52,
            left: 13,
            width: 30,
            height: 30,
          }}
        />
        <TextInput
          style={{
            color: '#000',
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            paddingLeft: 55,
            borderRadius: 10,
            marginTop: 10,
          }}
          placeholder="Write your review ..."
          placeholderTextColor={'black'}
          onChangeText={(inputText) => setText(inputText)}
          value={text}
        />
      </View>
    </View>
  );
}

export default Review;

const styles = StyleSheet.create({});