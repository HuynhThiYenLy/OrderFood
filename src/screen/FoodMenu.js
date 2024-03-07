import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const FoodMenu = () => {
    const navigation = useNavigation();
    const backScreen = () => {
        navigation.navigate('Home');
    };

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelection = option => {
        setSelectedOption(option);

        console.log(`Selected: ${option}`);
    };
    const handleAddToCart = productName => {
        console.log(`Added to cart: ${productName}`);
    };
    return (
        <View style={myStyles.container}>
            <View style={myStyles.outerView}>
                <TouchableOpacity onPress={backScreen}>
                    <Image
                        style={myStyles.imgBackCart}
                        source={require('../img/left.png')}
                    />
                </TouchableOpacity>

                <View>
                    <Text style={myStyles.txtFoodMenu}>FOOD MENU</Text>
                </View>
                <View style={myStyles.bdradiusCart}>
                    <Pressable>
                        <Image
                            style={myStyles.imgBackCart}
                            source={require('../img/cartshopping.png')}
                        />
                    </Pressable>
                </View>
            </View>

            <View style={myStyles.menuItem}>
                <Pressable
                    style={[
                        myStyles.menuItemButton,
                        selectedOption === 'All' && myStyles.selectedOption,
                    ]}
                    onPress={() => handleSelection('All')}>
                    <Text style={selectedOption === 'All' && myStyles.selectedText}>
                        All
                    </Text>
                </Pressable>
                <Pressable
                    style={[
                        myStyles.menuItemButton,
                        selectedOption === 'FastFood' && myStyles.selectedOption,
                    ]}
                    onPress={() => handleSelection('FastFood')}>
                    <Text style={selectedOption === 'FastFood' && myStyles.selectedText}>
                        Fast Food
                    </Text>
                </Pressable>
                <Pressable
                    style={[
                        myStyles.menuItemButton,
                        selectedOption === 'HeavyFood' && myStyles.selectedOption,
                    ]}
                    onPress={() => handleSelection('HeavyFood')}>
                    <Text style={selectedOption === 'HeavyFood' && myStyles.selectedText}>
                        Heavy Food
                    </Text>
                </Pressable>
                <Pressable
                    style={[
                        myStyles.menuItemButton,
                        selectedOption === 'Platter' && myStyles.selectedOption,
                    ]}
                    onPress={() => handleSelection('Platter')}>
                    <Text style={selectedOption === 'Platter' && myStyles.selectedText}>
                        Platter
                    </Text>
                </Pressable>
            </View>
            <View style={myStyles.separator}></View>
            <ScrollView>
                <View style={myStyles.outerViewProduct}>
                    <View style={myStyles.bgProduct}>
                        <Image
                            style={myStyles.imgProduct}
                            source={require('../img/pizza11.png')}
                        />
                        <View style={myStyles.containerProduct}>
                            <View style={myStyles.txtPrice}>
                                <Text style={myStyles.txtCurency}>$</Text>
                                <Text style={myStyles.txtPricePD}>9.50</Text>
                            </View>
                            <Text style={myStyles.txtRate}>4.5 ⭐ (25+)</Text>
                        </View>
                        <Text style={myStyles.txtCT1}>Red n hot pizza</Text>
                        <Text style={myStyles.txtCT2}>Spicy chicken, beef</Text>
                        <TouchableOpacity
                            style={myStyles.btnAddCart}
                            onPress={() => handleAddToCart('Pizza 1')}>
                            <Text style={myStyles.txtAddCart}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={myStyles.bgProduct}>
                        <Image
                            style={myStyles.imgProduct}
                            source={require('../img/pizza1.png')}
                        />
                        <View style={myStyles.containerProduct}>
                            <View style={myStyles.txtPrice}>
                                <Text style={myStyles.txtCurency}>$</Text>
                                <Text style={myStyles.txtPricePD}>12.0</Text>
                            </View>
                            <Text style={myStyles.txtRate}>4.5 ⭐ (25+)</Text>
                        </View>
                        <Text style={myStyles.txtCT1}>Meat Pasta</Text>
                        <Text style={myStyles.txtCT2}>meat & Basil</Text>
                        <TouchableOpacity
                            style={myStyles.btnAddCart}
                            onPress={() => handleAddToCart('Pizza 2')}>
                            <Text style={myStyles.txtAddCart}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={myStyles.outerViewProduct}>
                    <View style={myStyles.bgProduct}>
                        <Image
                            style={myStyles.imgProduct}
                            source={require('../img/brushetta.png')}
                        />
                        <View style={myStyles.containerProduct}>
                            <View style={myStyles.txtPrice}>
                                <Text style={myStyles.txtCurency}>$</Text>
                                <Text style={myStyles.txtPricePD}>3.0</Text>
                            </View>
                            <Text style={myStyles.txtRate}>4.5 ⭐ (25+)</Text>
                        </View>
                        <Text style={myStyles.txtCT1}>Brushetta</Text>
                        <Text style={myStyles.txtCT2}>toping & tomato</Text>
                        <TouchableOpacity
                            style={myStyles.btnAddCart}
                            onPress={() => handleAddToCart('Pizza 1')}>
                            <Text style={myStyles.txtAddCart}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={myStyles.bgProduct}>
                        <Image
                            style={myStyles.imgProduct}
                            source={require('../img/salat.png')}
                        />
                        <View style={myStyles.containerProduct}>
                            <View style={myStyles.txtPrice}>
                                <Text style={myStyles.txtCurency}>$</Text>
                                <Text style={myStyles.txtPricePD}>2.0</Text>
                            </View>
                            <Text style={myStyles.txtRate}>4.5 ⭐ (25+)</Text>
                        </View>
                        <Text style={myStyles.txtCT1}>Salad</Text>
                        <Text style={myStyles.txtCT2}>Naled Salmon</Text>
                        <TouchableOpacity
                            style={myStyles.btnAddCart}
                            onPress={() => handleAddToCart('Pizza 2')}>
                            <Text style={myStyles.txtAddCart}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={myStyles.outerViewProduct}>
                    <View style={myStyles.bgProduct}>
                        <Image
                            style={myStyles.imgProduct}
                            source={require('../img/rice.png')}
                        />
                        <View style={myStyles.containerProduct}>
                            <View style={myStyles.txtPrice}>
                                <Text style={myStyles.txtCurency}>$</Text>
                                <Text style={myStyles.txtPricePD}>2.50</Text>
                            </View>
                            <Text style={myStyles.txtRate}>4.5 ⭐ (25+)</Text>
                        </View>
                        <Text style={myStyles.txtCT1}>Cơm Chiên</Text>
                        <Text style={myStyles.txtCT2}>Ngon nhứt nách</Text>
                        <TouchableOpacity
                            style={myStyles.btnAddCart}
                            onPress={() => handleAddToCart('Pizza 1')}>
                            <Text style={myStyles.txtAddCart}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={myStyles.bgProduct}>
                        <Image
                            style={myStyles.imgProduct}
                            source={require('../img/noodlespicy.png')}
                        />
                        <View style={myStyles.containerProduct}>
                            <View style={myStyles.txtPrice}>
                                <Text style={myStyles.txtCurency}>$</Text>
                                <Text style={myStyles.txtPricePD}>3.50</Text>
                            </View>
                            <Text style={myStyles.txtRate}>4.5 ⭐ (25+)</Text>
                        </View>
                        <Text style={myStyles.txtCT1}>Noodle Spicy</Text>
                        <Text style={myStyles.txtCT2}>Very Spicy</Text>
                        <TouchableOpacity
                            style={myStyles.btnAddCart}
                            onPress={() => handleAddToCart('Pizza 2')}>
                            <Text style={myStyles.txtAddCart}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default FoodMenu;

const myStyles = StyleSheet.create({
    containerProduct: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
    },
    txtCurency: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fe734c',
        top: 5,
    },
    txtPricePD: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    txtPrice: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 20,
        left: 5,
        padding: 5,
        width: 60,
    },
    txtRate: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        borderRadius: 20,
        alignSelf: 'flex-end',
        color: 'black',
        top: 135,
        left: 10,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    containerProduct: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
    },
    txtCT2: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    txtCT1: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    txtAddCart: {
        color: 'white',
        fontSize: 20,
    },
    btnAddCart: {
        marginTop: 10,
        backgroundColor: '#fe734c',
        borderRadius: 20,
        width: 80,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    imgProduct: {
        width: 155,
        height: 155,
        resizeMode: 'cover',
        borderRadius: 25,
        marginTop: -10,
    },
    bgProduct: {
        backgroundColor: '#ffffff',
        width: '47%',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        marginRight: 10,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    outerViewProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    separator: {
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1,
        width: '100%',
        marginTop: -6,
    },
    selectedOption: {
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
    },
    selectedText: {
        color: '#fe734c',
    },
    menuItemButton: {
        borderColor: '#fe734c',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    txtFoodMenu: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    },
    imgBackCart: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
    },

    bdradiusCart: {
        backgroundColor: '#fe734c',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    container: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
        padding: 10,
    },
});