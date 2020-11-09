import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';

import {authLoginCreator} from '../redux/actions/action';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  let login = useSelector((state) => state.auth.isLogin);
  const auth = useSelector((state) => state.auth.data);

  const isLogin = true;

  const [form, setForm] = useState({email: null, password: null});
  // console.log(login);

  const handleSubmit = () => {
    dispatch(authLoginCreator(form.email, form.password));
  };

  // useEffect(() => {
  //   if (login) {
  //     navigation.navigate('HomeApp');
  //     setForm({...form, email: null, password: null});
  //   }
  // }, [auth]);

  useEffect(() => {
    console.log(`is Login`, login);
    if (login === true) {
      console.log('string biasa');
      navigation.navigate('HomeApp');
    }
  }, [login]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Sign In</Text>
      <View style={{marginTop: 20}}>
        <View style={{position: 'relative'}}>
          <TextInput
            value={form.email}
            placeholder="email"
            name="email"
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
            onChangeText={(Text) => setForm({...form, email: Text})}
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
            value={form.password}
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
            onChangeText={(Text) => setForm({...form, password: Text})}
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
              LOG IN
            </Text>
          </Button>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 25}}>
        <Text style={{fontSize: 16}}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text
            style={{fontSize: 16, fontWeight: 'bold', color: '#4abdac'}}
            onPress={() => navigation.navigate('Register')}>
            {' '}
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
