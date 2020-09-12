import React from 'react'
import { View } from 'react-native'

import BottomNavigasi from '../components/bottomNavigasi/BottomNavigasi';
import HeaderOrders from '../components/headerOrders/HeaderOrders';

const Orders = () => {
    return(
        <>
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
               <HeaderOrders />
            </View>
            <BottomNavigasi />
        </View>
        </>
    )
}

export default Orders