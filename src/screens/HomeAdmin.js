import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import ListMenuAdmin from '../components/listMenu/ListMenuAdmin';
import Search from '../components/search/Search';

const HomeAdmin = ({navigation}) => {
  return (
    <View style={{flex: 1, marginBottom: 70}}>
      <View style={{flex: 1}}>
        <Search />
        <ListMenuAdmin navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeAdmin;
