import React, {useEffect} from 'react';

import {View} from 'react-native';

import Search from '../components/search/Search';
import ListMenu from '../components/listMenu/ListMenu';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, marginBottom: 70}}>
      <View style={{flex: 1}}>
        <Search navigation={navigation} />
        <ListMenu navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;
