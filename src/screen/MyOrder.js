import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const MyOrder = () => {
    const [selectedTab, setSelectedTab] = useState('txtCom');

    const handleTabPress = tab => {
        setSelectedTab(tab);
    };
    const navigation = useNavigation();
    const backScreen = () => {

        navigation.navigate('Home');
    };

    return (
        <View style={myStyle.container}>
            <View style={myStyle.header}>
                <View>
                    <TouchableOpacity onPress={backScreen}>
                        <Image source={require('../img/left.png')} style={myStyle.left} />
                    </TouchableOpacity>
                </View>

                <View style={myStyle.txtHeader}>
                    <Text style={myStyle.txt1}>My Order</Text>
                </View>
            </View>
            <View style={myStyle.body}>
                <TouchableWithoutFeedback onPress={() => handleTabPress('txtCom')}>
                    <View style={myStyle.lineContainer}>
                        <Text
                            style={[
                                myStyle.txtCom,
                                selectedTab === 'txtCom' ? myStyle.selectedText : null,
                            ]}>
                            Complete Order
                        </Text>
                        <TouchableWithoutFeedback onPress={() => handleTabPress('txtPen')}>
                            <Text
                                style={[
                                    myStyle.txtPen,
                                    selectedTab === 'txtPen' ? myStyle.selectedText : null,
                                ]}>
                                Pending Order
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={myStyle.main}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={require('../img/banhmi.jpg')}
                        style={myStyle.mainImg}
                    />
                </View>
                <View style={{ flex: 2.5 }}>
                    <View style={myStyle.mainText}>
                        <Text style={myStyle.txtItem}>4 Item From KFC</Text>
                        <Text style={myStyle.txtDes}>
                            Pizza, Alo Bortha, Thethul Accar, Chiken tiriaky
                        </Text>
                        <Text style={myStyle.txtItem}>🌶️ Spicy</Text>
                    </View>
                </View>
                <View style={{ flex: 1.5 }}>
                    <View style={myStyle.mainPrice}>
                        <Text style={myStyle.txtPrice}>$199</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text style={myStyle.txtAgain}>Order Again</Text>
                    </View>
                </View>
            </View>

            <View style={myStyle.main1}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={require('../img/hamberger.jpg')}
                        style={myStyle.mainImg}
                    />
                </View>
                <View style={{ flex: 2.5 }}>
                    <View style={myStyle.mainText}>
                        <Text style={myStyle.txtItem}>4 Item From KFC</Text>
                        <Text style={myStyle.txtDes}>
                            Pizza, Alo Bortha, Thethul Accar, Chiken tiriaky
                        </Text>
                        <Text style={myStyle.txtItem}>🌶️ Spicy</Text>
                    </View>
                </View>
                <View style={{ flex: 1.5 }}>
                    <View style={myStyle.mainPrice}>
                        <Text style={myStyle.txtPrice}>$199</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text style={myStyle.txtAgain}>Order Again</Text>
                    </View>
                </View>
            </View>

            <View style={myStyle.main1}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={require('../img/hacao.jpg')}
                        style={myStyle.mainImg}
                    />
                </View>
                <View style={{ flex: 2.5 }}>
                    <View style={myStyle.mainText}>
                        <Text style={myStyle.txtItem}>4 Item From KFC</Text>
                        <Text style={myStyle.txtDes}>
                            Pizza, Alo Bortha, Thethul Accar, Chiken tiriaky
                        </Text>
                        <Text style={myStyle.txtItem}>🌶️ Spicy</Text>
                    </View>
                </View>
                <View style={{ flex: 1.5 }}>
                    <View style={myStyle.mainPrice}>
                        <Text style={myStyle.txtPrice}>$199</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text style={myStyle.txtAgain}>Order Again</Text>
                    </View>
                </View>
            </View>

            <View style={myStyle.main1}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={require('../img/pho.jpg')}
                        style={myStyle.mainImg}
                    />
                </View>
                <View style={{ flex: 2.5 }}>
                    <View style={myStyle.mainText}>
                        <Text style={myStyle.txtItem}>4 Item From KFC</Text>
                        <Text style={myStyle.txtDes}>
                            Pizza, Alo Bortha, Thethul Accar, Chiken tiriaky
                        </Text>
                        <Text style={myStyle.txtItem}>🌶️ Spicy</Text>
                    </View>
                </View>
                <View style={{ flex: 1.5 }}>
                    <View style={myStyle.mainPrice}>
                        <Text style={myStyle.txtPrice}>$199</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text style={myStyle.txtAgain}>Order Again</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default MyOrder;

const myStyle = StyleSheet.create({
    txtPrice: {
        marginRight: 5,
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
    },
    txtAgain: {
        marginRight: 5,
        color: '#f07c46',
        fontSize: 18,
        fontWeight: '500',
    },
    txtDes: {
        fontSize: 14,
        fontWeight: '600',
    },
    txtItem: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
    },
    mainText: {
        marginLeft: 15,
    },
    mainPrice: {
        alignItems: 'flex-end',
    },
    mainImg: {
        width: 80,
        height: 80,
        borderRadius: 15,
    },
    main: {
        height: 90,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(245, 230, 223, 0.5)',
    },
    main1: {
        height: 90,
        marginTop: 8,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(245, 230, 223, 0.5)',
    },
    txtCom: {
        fontSize: 20,
        fontWeight: '600',
        marginRight: 20,
        color: 'black',
    },
    txtPen: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
    },
    selectedText: {
        color: '#f56e38',
    },
    lineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#1c1918',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    body: {
        marginTop: 30,
    },
    txtHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
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
    left: {
        width: 25,
        height: 25,
    },
    txt1: {
        fontSize: 25,
        fontWeight: '700',
        color: 'black',
    },
});