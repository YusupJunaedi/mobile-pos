import React from 'react';
import {View} from 'react-native';
import ListMenuFilter from '../components/listMenu/ListMenuFilter';
import SearchFilter from '../components/search/SearchFilter';
import {useSelector} from 'react-redux';
import ListMenuAdminFilter from '../components/listMenu/ListMenuFilterAdmin';

const FilterMenu = ({navigation}) => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  return (
    <View style={{flex: 1, marginBottom: 70}}>
      <View style={{flex: 1}}>
        <SearchFilter navigation={navigation} />
        {isAdmin ? (
          <ListMenuAdminFilter navigation={navigation} />
        ) : (
          <ListMenuFilter navigation={navigation} />
        )}
      </View>
    </View>
  );
};

export default FilterMenu;
