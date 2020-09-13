import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Thumbnail, Button} from 'native-base';
import {useDispatch} from 'react-redux';

import {logoutCreator} from '../redux/actions/action';

import BottomNavigasi from '../components/bottomNavigasi/BottomNavigasi';

const Account = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#4abdac',
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          position: 'relative',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Thumbnail
          source={require('../assets/images/man.jpg')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            position: 'absolute',
            bottom: -70,
          }}
        />
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
        }}>
        <Text style={{marginTop: 80, fontWeight: 'bold', fontSize: 20}}>
          Yusup Junaedi
        </Text>
      </View>
      <View style={{paddingHorizontal: 25, paddingBottom: 30}}>
        <TouchableOpacity>
          <Button
            rounded
            block
            danger
            onPress={() => {
              dispatch(logoutCreator());
              navigation.navigate('Login');
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              LOG OUT
            </Text>
          </Button>
        </TouchableOpacity>
      </View>
      <BottomNavigasi navigation={navigation} />
    </View>
  );
};

export default Account;
