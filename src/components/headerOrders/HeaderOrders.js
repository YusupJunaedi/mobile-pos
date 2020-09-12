import React from 'react'
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native'
import { Button } from 'native-base'

const HeaderOrders = () => {
    return(
        <>
            <View style={{flexDirection: 'row', paddingVertical: 10, backgroundColor: 'pink'}}>
                <TouchableOpacity style={{position: "relative", marginLeft: 10, flex: 1}}>
                    <Image source={require("../../assets/icons/back.png")} style={{width: 25, height: 25, position: "absolute", left: 10}} />
                </TouchableOpacity>
                <View style={{justifyContent: "center", alignContent: "center", flex: 1}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Orders</Text>
                </View>
                <View style={{justifyContent: "center", alignContent: "center"}}>
                    <Image source={require("../../assets/images/arkademy.png")} style={{width: 100,height: 25}} />
                </View>
            </View>

            <View style={{marginTop: 30,flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', marginBottom: 20}}>
                        <Image source={{uri: 'https://www.resepistimewa.com/wp-content/uploads/ayam-goreng-kalasan-khas-yogya.jpg'}} style={{width: 100,height: 80, flex: 1}} />
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                            <Image source={require('../../assets/icons/minus.png')} style={{width: 25, height: 25}} />
                            <View style={{borderBottomWidth: 1, borderColor: 'green', textDecorationLine: 'underLine', paddingHorizontal: 5}}>
                                <TextInput value="1" style={{ fontWeight: 'bold', width: 50, textAlign: 'center', fontSize: 20}} />
                            </View>
                            <Image source={require('../../assets/icons/add.png')} style={{width: 25, height: 25}} />
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Rp. 199.000</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 20}}>
                        <Image source={{uri: 'https://www.resepistimewa.com/wp-content/uploads/ayam-goreng-kalasan-khas-yogya.jpg'}} style={{width: 100,height: 80, flex: 1}} />
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                            <Image source={require('../../assets/icons/minus.png')} style={{width: 25, height: 25}} />
                            <View style={{borderBottomWidth: 1, borderColor: 'green', textDecorationLine: 'underLine', paddingHorizontal: 5}}>
                                <TextInput value="1" style={{ fontWeight: 'bold', width: 50, textAlign: 'center', fontSize: 20}} />
                            </View>
                            <Image source={require('../../assets/icons/add.png')} style={{width: 25, height: 25}} />
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Rp. 199.000</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 20}}>
                        <Image source={{uri: 'https://www.resepistimewa.com/wp-content/uploads/ayam-goreng-kalasan-khas-yogya.jpg'}} style={{width: 100,height: 80, flex: 1}} />
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                            <Image source={require('../../assets/icons/minus.png')} style={{width: 25, height: 25}} />
                            <View style={{borderBottomWidth: 1, borderColor: 'green', textDecorationLine: 'underLine', paddingHorizontal: 5}}>
                                <TextInput value="1" style={{ fontWeight: 'bold', width: 50, textAlign: 'center', fontSize: 20}} />
                            </View>
                            <Image source={require('../../assets/icons/add.png')} style={{width: 25, height: 25}} />
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Rp. 199.000</Text>
                        </View>
                    </View>
                </View>

                <View style={{height: 80, borderTopWidth: 1, borderColor: "#e8e8e8", flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', flex: 1, marginLeft: 20}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Total Harga</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'orange'}}>Rp. 42.000</Text>
                    </View>
                    <View style={{justifyContent: 'center', flex: 1, alignItems: 'flex-end', marginRight: 20}}>
                        <Button block rounded success><Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Beli 3</Text></Button>
                    </View>
                </View>
                
            </View>

        </>
    )
}

export default HeaderOrders
