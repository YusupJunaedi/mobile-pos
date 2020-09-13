import React from 'react';
import {View} from 'react-native';

import BottomNavigasi from '../components/bottomNavigasi/BottomNavigasi';
import HeaderOrders from '../components/headerOrders/HeaderOrders';
import ListCart from '../components/listCart/ListCart';

const Orders = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <HeaderOrders navigation={navigation} />
          <ListCart />
        </View>
        <BottomNavigasi navigation={navigation} />
      </View>
    </>
  );
};

export default Orders;
