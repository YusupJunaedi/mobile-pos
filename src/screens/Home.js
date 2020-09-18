import React, {useEffect} from 'react';
import Axios from 'axios';

import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getAllMenuCreator, getMoreMenuCreator} from '../redux/actions/action';

import Search from '../components/search/Search';
import ListMenu from '../components/listMenu/ListMenu';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllMenuCreator());
  // }, []);
  return (
    <View style={{flex: 1, marginBottom: 70}}>
      <View style={{flex: 1}}>
        <Search />
        <ListMenu navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;
