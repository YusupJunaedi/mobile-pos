import React, {useState} from 'react';
import {View, Image, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {searchMenuCreator} from '../../redux/actions/action';

const Search = () => {
  const dispatch = useDispatch();
  const [menu, setmenu] = useState(null);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          backgroundColor: '#4abdac',
        }}>
        <View style={{position: 'relative', flex: 1, marginLeft: 10}}>
          <TextInput
            placeholder="What do you want ?"
            style={{
              borderWidth: 1,
              borderColor: '#003333',
              borderRadius: 25,
              fontSize: 16,
              paddingLeft: 50,
              paddingRight: 25,
            }}
            onChangeText={(Text) => setmenu(Text)}
            onSubmitEditing={() => {
              dispatch(searchMenuCreator(menu, 'name_product'));
              setmenu(null);
            }}
          />
          <Image
            source={require('../../assets/icons/search.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              left: 15,
              top: 12,
            }}
          />
        </View>
        <View style={{justifyContent: 'center', alignContent: 'center'}}>
          <Image
            source={require('../../assets/images/arkademy.png')}
            style={{width: 100, height: 25}}
          />
        </View>
      </View>
    </>
  );
};

export default Search;
