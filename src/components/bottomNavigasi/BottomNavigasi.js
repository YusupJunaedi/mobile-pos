import React from 'react'
import {Text, View, Image} from 'react-native'


const BottomNavigasi = () => {
    return (
        <>
            <View style={{height: 55, flexDirection: "row", borderTopWidth: 1, borderColor: "#e8e8e8"}}>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../../assets/icons/home.png')} style={{width: 23, height: 23}} />
                    <Text style={{color: '#545454', marginTop: 4}}>Home</Text>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../../assets/icons/cart.png')} style={{width: 23, height: 23}} />
                    <Text style={{color: '#545454', marginTop: 4}}>Orders</Text>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../../assets/icons/list.png')} style={{width: 23, height: 23}} />
                    <Text style={{color: '#545454', marginTop: 4}}>History</Text>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../../assets/icons/user.png')} style={{width: 23, height: 23}} />
                    <Text style={{color: '#545454', marginTop: 4}}>Akun</Text>
                </View>
            </View>
        </>
    )
}

export default BottomNavigasi