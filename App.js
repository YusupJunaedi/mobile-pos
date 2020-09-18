import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import configureStore from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import BottomNavigator from './src/components/bottomNavigasi/BottomNavigator';

const {store, persistor} = configureStore();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="HomeApp" component={BottomNavigator} />
          </Stack.Navigator>
        </Provider>
      </PersistGate>
    </NavigationContainer>
  );
};

export default App;
