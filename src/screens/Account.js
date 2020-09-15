import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Thumbnail, Button} from 'native-base';
import {useDispatch} from 'react-redux';
import Modal from 'react-native-modal';

import {logoutCreator} from '../redux/actions/action';

const Account = ({navigation}) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
              toggleModal();
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              LOG OUT
            </Text>
          </Button>
        </TouchableOpacity>
      </View>

      <View>
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInLeft"
          animationOut="slideOutRight">
          <View
            style={{
              backgroundColor: 'white',
              padding: 22,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              borderColor: 'rgba(0, 0, 0, 0.1)',
            }}>
            <Text style={{fontSize: 20, marginBottom: 12}}>
              are you sure you want to logout ?
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{paddingHorizontal: 10}}>
                <TouchableOpacity>
                  <Button
                    style={{width: 100}}
                    block
                    rounded
                    success
                    onPress={() => {
                      dispatch(logoutCreator());
                      navigation.navigate('Login');
                      toggleModal();
                    }}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>
                      Yes
                    </Text>
                  </Button>
                </TouchableOpacity>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <TouchableOpacity>
                  <Button
                    style={{width: 100}}
                    block
                    rounded
                    danger
                    onPress={toggleModal}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>No</Text>
                  </Button>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Account;
