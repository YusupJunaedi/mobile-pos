import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import storeRedux from './src/redux';

import Home from './src/screens/Home';
import Orders from './src/screens/Orders';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Account from './src/screens/Account';
import BottomNavigator from './src/components/bottomNavigasi/BottomNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <Provider store={storeRedux}>
    //   <BottomNavigator />
    // </Provider>

    <NavigationContainer>
      <Provider store={storeRedux}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="HomeApp" component={BottomNavigator} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
