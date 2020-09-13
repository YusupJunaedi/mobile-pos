import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';

import {authRegisterCreator} from '../redux/actions/action';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.isLogin);
  const auth = useSelector((state) => state.auth.data);
  const [form, setform] = useState({name: null, email: null, password: null});

  const handleSubmit = () => {
    dispatch(authRegisterCreator(form.name, form.email, form.password));
  };

  useEffect(() => {
    if (login) {
      return navigation.navigate('Home');
    }
  }, [auth]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Register</Text>
      <View style={{marginTop: 20}}>
        <View style={{position: 'relative'}}>
          <TextInput
            placeholder="Name"
            style={{
              borderWidth: 1,
              borderColor: '#e8e8e8',
              borderRadius: 25,
              backgroundColor: 'white',
              width: 350,
              fontSize: 18,
              paddingLeft: 50,
              paddingRight: 20,
            }}
            onChangeText={(Text) => setform({...form, name: Text})}
          />
          <Image
            source={require('../assets/icons/user-form.png')}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              top: 10,
              left: 12,
            }}
          />
        </View>
        <View style={{position: 'relative', marginTop: 20}}>
          <TextInput
            placeholder="email"
            style={{
              borderWidth: 1,
              borderColor: '#e8e8e8',
              borderRadius: 25,
              backgroundColor: 'white',
              width: 350,
              fontSize: 18,
              paddingLeft: 50,
              paddingRight: 20,
            }}
            onChangeText={(Text) => setform({...form, email: Text})}
          />
          <Image
            source={require('../assets/icons/open-mail.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              top: 10,
              left: 12,
            }}
          />
        </View>
        <View style={{position: 'relative', marginTop: 20}}>
          <TextInput
            secureTextEntry
            placeholder="password"
            style={{
              borderWidth: 1,
              borderColor: '#e8e8e8',
              borderRadius: 25,
              backgroundColor: 'white',
              width: 350,
              fontSize: 18,
              paddingLeft: 50,
              paddingRight: 20,
            }}
            onChangeText={(Text) => setform({...form, password: Text})}
          />
          <Image
            source={require('../assets/icons/lock.png')}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              top: 10,
              left: 12,
            }}
          />
        </View>
      </View>
      <View style={{width: 350, marginTop: 25}}>
        <TouchableOpacity>
          <Button
            block
            rounded
            style={{backgroundColor: '#4abdac'}}
            onPress={handleSubmit}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              CREATE ACCOUNT
            </Text>
          </Button>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 25}}>
        <Text style={{fontSize: 16}}>Already have an account?</Text>
        <TouchableOpacity>
          <Text
            style={{fontSize: 16, fontWeight: 'bold', color: '#4abdac'}}
            onPress={() => navigation.navigate('Login')}>
            {' '}
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
