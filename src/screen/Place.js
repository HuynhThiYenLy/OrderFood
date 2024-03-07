import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';

const Place = () => {
    const [menuPressed, setMenuPressed] = useState(false);
    const [imgListPressed, setImgListPressed] = useState(false);

    const handleMenuPress = () => {
        setMenuPressed(!menuPressed);
    };

    const handleImgListPress = () => {
        setImgListPressed(!imgListPressed);
    };

    return (
        <View style={myStyle.container}>
            <View style={myStyle.header}>
                <TouchableHighlight
                    style={[
                        myStyle.touchableHighlight,
                        menuPressed && myStyle.touchableHighlightPressed,
                    ]}
                    onPress={handleMenuPress}
                    underlayColor="transparent">
                    <Image source={require('../img/listmenu.png')} style={myStyle.menu} />
                </TouchableHighlight>

                <View style={myStyle.txtHeader}>
                    <Text style={myStyle.txt1}>Deliver to ◢</Text>
                    <Text style={myStyle.txt2}>Parijat, Housing Estate</Text>
                </View>

                <Image source={require('../img/filter.png')} style={myStyle.filter} />
            </View>
            <TextInput
                style={myStyle.input}
                placeholder="🔍  Find Your Restaurant"
                placeholderTextColor="#a9a9a9"
            />
            <View>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={event => {
                        const scrollX = event.nativeEvent.contentOffset.x;
                        // Tính toán và xử lý dựa trên giá trị scrollX nếu cần
                    }}>
                    <View style={myStyle.rowcard}>
                        <View style={myStyle.card}>
                            <Image
                                source={require('../img/all.png')}
                                style={myStyle.cardImage}
                            />
                            <View style={myStyle.cardContent}>
                                <Text style={myStyle.title}>All</Text>
                            </View>
                        </View>
                        <View style={myStyle.card}>
                            <Image
                                source={require('../img/meat.png')}
                                style={myStyle.cardImage}
                            />
                            <View style={myStyle.cardContent}>
                                <Text style={myStyle.title}>Meat</Text>
                            </View>
                        </View>
                        <View style={myStyle.card}>
                            <Image
                                source={require('../img/fruit.png')}
                                style={myStyle.cardImage}
                            />
                            <View style={myStyle.cardContent}>
                                <Text style={myStyle.title}>Fruit</Text>
                            </View>
                        </View>
                        <View style={myStyle.card}>
                            <Image
                                source={require('../img/milk.png')}
                                style={myStyle.cardImage}
                            />
                            <View style={myStyle.cardContent}>
                                <Text style={myStyle.title}>Milk</Text>
                            </View>
                        </View>
                        <View style={myStyle.card}>
                            <Image
                                source={require('../img/smoothie.png')}
                                style={myStyle.cardImage}
                            />
                            <View style={myStyle.cardContent}>
                                <Text style={myStyle.title}>Smoothie</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                pagingEnabled
                onScroll={event => {
                    const scrollX = event.nativeEvent.contentOffset.x;
                    // Tính toán và xử lý dựa trên giá trị scrollX nếu cần
                }}>
                <View style={myStyle.cardBody}>
                    <View>
                        <Image
                            source={require('../img/nhahang2.jpg')}
                            style={{ width: '100%', height: 170, borderRadius: 20 }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 20,
                            paddingTop: 10,
                        }}>
                        <View>
                            <Text style={myStyle.hour}>9:00 AM</Text>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    position: 'absolute',
                                    bottom: 100,
                                }}>
                                <Text
                                    style={{
                                        color: 'yellow',
                                        fontSize: 30,
                                        fontWeight: '900',
                                        marginLeft: 10,
                                    }}>
                                    25%
                                </Text>
                                <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>
                                    Discount
                                </Text>
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>
                                Artisan Coffee Shop
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>29 recipes</Text>
                        </View>
                        <View>
                            <Text></Text>
                            <Text style={{ fontSize: 20 }}>⭐⭐⭐⭐ (9)</Text>
                        </View>
                    </View>
                </View>
                <View style={myStyle.cardBody}>
                    <View>
                        <Image
                            source={require('../img/moo.jpg')}
                            style={{ width: '100%', height: 170, borderRadius: 20 }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 20,
                            paddingTop: 10,
                        }}>
                        <View>
                            <Text style={myStyle.hour}>9:00 AM</Text>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    position: 'absolute',
                                    bottom: 100,
                                }}>
                                <Text
                                    style={{
                                        color: 'yellow',
                                        fontSize: 30,
                                        fontWeight: '900',
                                        marginLeft: 10,
                                    }}>
                                    25%
                                </Text>
                                <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>
                                    Discount
                                </Text>
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>
                                Moo Beef Steak
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>29 recipes</Text>
                        </View>
                        <View>
                            <Text></Text>
                            <Text style={{ fontSize: 20 }}>⭐⭐⭐ (9)</Text>
                        </View>
                    </View>
                </View>
                <View style={myStyle.cardBody}>
                    <View>
                        <Image
                            source={require('../img/nhahang.jpg')}
                            style={{ width: '100%', height: 170, borderRadius: 20 }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 20,
                            paddingTop: 10,
                        }}>
                        <View>
                            <Text style={myStyle.hour}>9:00 AM</Text>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    position: 'absolute',
                                    bottom: 100,
                                }}>
                                <Text
                                    style={{
                                        color: 'yellow',
                                        fontSize: 30,
                                        fontWeight: '900',
                                        marginLeft: 10,
                                    }}>
                                    25%
                                </Text>
                                <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>
                                    Discount
                                </Text>
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>
                                The Log Restaurant
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>29 recipes</Text>
                        </View>
                        <View>
                            <Text></Text>
                            <Text style={{ fontSize: 20 }}>⭐⭐⭐ (9)</Text>
                        </View>
                    </View>
                </View>
                <View style={myStyle.cardBody}>
                    <View>
                        <Image
                            source={require('../img/nhahang2.jpg')}
                            style={{ width: '100%', height: 170, borderRadius: 20 }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 20,
                            paddingTop: 10,
                        }}>
                        <View>
                            <Text style={myStyle.hour}>9:00 AM</Text>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    position: 'absolute',
                                    bottom: 100,
                                }}>
                                <Text
                                    style={{
                                        color: 'yellow',
                                        fontSize: 30,
                                        fontWeight: '900',
                                        marginLeft: 10,
                                    }}>
                                    25%
                                </Text>
                                <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>
                                    Discount
                                </Text>
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>
                                Elsol Meat&Wine
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>29 recipes</Text>
                        </View>
                        <View>
                            <Text></Text>
                            <Text style={{ fontSize: 20 }}>⭐⭐⭐⭐⭐ (9)</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Place;

const myStyle = StyleSheet.create({
    hour: {
        position: 'absolute',
        bottom: 200,
        color: 'white',
        fontWeight: '900',
        fontSize: 23,
    },
    cardBody: {
        width: '100%',
        backgroundColor: '#faf8f7',
        borderRadius: 20,
    },
    rowcard: {
        flexDirection: 'row',
    },
    card: {
        width: 80,
        height: 100,
        marginTop: 10,
    },

    cardImage: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        borderRadius: 10,
    },

    cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
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

    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(240, 233, 233, 0.6)',
        borderRadius: 15,
        paddingLeft: 10,
        marginTop: 20,
        fontSize: 19,
    },
    filter: {
        width: 30,
        height: 30,
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
        backgroundColor: 'rgba(240, 233, 233, 0.4)',
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