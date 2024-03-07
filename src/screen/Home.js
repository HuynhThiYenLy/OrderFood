import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  // Mock data for FlatList
  const data = [
    {
      id: '1',
      image: require('../img/nhahang.jpg'),
      name: 'Vietnamese Restaurant',
      address: 'Tô Ký, Tân Chánh Hiệp, Quận 12',
      icon: require('../img/chili.png'),
    },
    {
      id: '2',
      image: require('../img/nhahang2.jpg'),
      name: 'Sorae Restaurant',
      address: '100 Trần Nguyên Đán, Phường 3',
      icon: require('../img/res.png'),
    },
    {
      id: '3',
      image: require('../img/thecoffe.jpg'),
      name: 'The Coffee House',
      address: '240 Phạm Văn Chiêu, Phường 9',
      icon: require('../img/bean.png'),
    },
    {
      id: '4',
      image: require('../img/nhahang2.jpg'),
      name: 'Hotto Restaurant',
      address: '100 Trần Nguyên Đán, Phường 3',
      icon: require('../img/hira.png'),
    },
    {
      id: '5',
      image: require('../img//nhahang.jpg'),
      name: 'Chay Restaurant',
      address: '52 Võ Văn Tần, Phường 6, Quận 3',
      icon: require('../img/chay.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={myStyle.body}>
      <Image source={item.image} style={myStyle.imgnhahang} />
      <View>
        <Text style={myStyle.nameshop}>{item.name}</Text>
        <Text style={myStyle.addressshop}>{item.address}</Text>
      </View>
      <Image source={item.icon} style={myStyle.iconshop} />
    </View>
  );
  return (
    <View style={myStyle.container}>
      <View style={myStyle.header}>
        <TouchableHighlight
          style={[
            myStyle.touchableHighlight,
            isPressed && myStyle.touchableHighlightPressed,
          ]}
          onPress={handlePress}
          underlayColor="transparent">
          <Image source={require('../img/listmenu.png')} style={myStyle.menu} />
        </TouchableHighlight>

        <View style={myStyle.txtHeader}>
          <Text style={myStyle.txt1}>Deliver to ◢</Text>
          <Text style={myStyle.txt2}>Parijat, Housing Estate</Text>
        </View>

        <Image source={require('../img/avata.png')} style={myStyle.avata} />
      </View>

      <Text style={myStyle.welcome}>Welcome Foody !</Text>

      <TextInput
        style={myStyle.input}
        placeholder="🔍 Find Your Food"
        placeholderTextColor="#a9a9a9"
      />
      <View style={myStyle.near}>
        <Text style={myStyle.txtNear}>Nearby Place</Text>
        <Text style={myStyle.txtSee}>See All (12)</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
      />
      <View style={myStyle.near}>
        <Text style={myStyle.txtNear}>Popular Restaurant</Text>
        <Text style={myStyle.txtSee}>See All (12)</Text>
      </View>

      <ScrollView>
        <ScrollView>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
            <View style={myStyle.rowcard}>
              <View style={myStyle.card}>
                <Image
                  source={require('../img/thecoffe.jpg')}
                  style={myStyle.cardImage}
                />
                <View style={myStyle.cardContent}>
                  <Text style={myStyle.title}>The Coffee House</Text>
                  <Text style={myStyle.description}>Phường 9, Gò Vấp</Text>
                  <Text style={myStyle.description}>⭐⭐⭐</Text>
                </View>
              </View>
              <View style={myStyle.card1}>
                <Image
                  source={require('../img/landmark.jpg')}
                  style={myStyle.cardImage}
                />
                <View style={myStyle.cardContent}>
                  <Text style={myStyle.title}>Capricciosa</Text>
                  <Text style={myStyle.description}>Tầng B2-Landmark</Text>
                  <Text style={myStyle.description}>⭐⭐⭐⭐</Text>
                </View>
              </View>
              <View style={myStyle.card1}>
                <Image
                  source={require('../img/red.jpg')}
                  style={myStyle.cardImage}
                />
                <View style={myStyle.cardContent}>
                  <Text style={myStyle.title}>Red Chilli Seafood</Text>
                  <Text style={myStyle.description}>Phú Mỹ Hưng,Quận7</Text>
                  <Text style={myStyle.description}>⭐⭐⭐⭐⭐</Text>
                </View>
              </View>
              <View style={myStyle.card1}>
                <Image
                  source={require('../img/moo.jpg')}
                  style={myStyle.cardImage}
                />
                <View style={myStyle.cardContent}>
                  <Text style={myStyle.title}>Moo Beef Steak</Text>
                  <Text style={myStyle.description}>Bến Nghé, Quận 1</Text>
                  <Text style={myStyle.description}>⭐⭐⭐⭐</Text>
                </View>
              </View>
            </View>
            <View style={myStyle.card1}>
              <Image
                source={require('../img/cry.jpg')}
                style={myStyle.cardImage}
              />
              <View style={myStyle.cardContent}>
                <Text style={myStyle.title}>Crystal Jade </Text>
                <Text style={myStyle.description}>Bến Nghé, Quận 1</Text>
                <Text style={myStyle.description}>⭐⭐⭐⭐</Text>
              </View>
            </View>
            <View style={myStyle.card1}>
              <Image
                source={require('../img/red.jpg')}
                style={myStyle.cardImage}
              />
              <View style={myStyle.cardContent}>
                <Text style={myStyle.title}>Red Chilli Seafood</Text>
                <Text style={myStyle.description}>Phú Mỹ Hưng,Quận7</Text>
                <Text style={myStyle.description}>⭐⭐⭐⭐⭐</Text>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const myStyle = StyleSheet.create({
  rowcard: {
    flexDirection: 'row',
  },
  card: {
    width: 170,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  card1: {
    width: 170,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
  },
  cardImage: {
    width: 150,
    height: 120,
    alignSelf: 'center',
    borderRadius: 10,
  },

  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  addressshop: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  nameshop: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },
  iconshop: {
    width: 35,
    height: 35,
  },
  imgnhahang: {
    width: 70,
    height: 70,
    borderRadius: 20,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 80,
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'rgba(240, 233, 233, 0.2)',
    justifyContent: 'space-between',
  },

  txtNear: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
  txtSee: {
    fontSize: 16,
    color: '#f56e38',
    marginTop: 6,
    fontWeight: '500',
  },
  near: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(240, 233, 233, 0.6)',
    borderRadius: 15,
    paddingLeft: 20,
    marginTop: 20,
    fontSize: 15,
  },
  welcome: {
    marginTop: 30,
    fontSize: 23,
    textAlign: 'left',
    fontWeight: '700',
    color: 'black',
  },
  txt1: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  txt2: {
    fontSize: 19,
    color: '#f56e38',
    fontWeight: '500',
  },
  avata: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  txtHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  menu: {
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FFFFFF',
  },
  touchableHighlight: {
    backgroundColor: 'rgba(240, 233, 233, 0.6)',
    width: 50,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  touchableHighlightPressed: {
    backgroundColor: 'rgba(240, 233, 233, 1)',
  },
});