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
import EditMenu from './src/screens/EditMenu';
import EditProfile from './src/screens/EditProfile';
import FilterMenu from './src/screens/FilterMenu';

const Stack = createStackNavigator();

const App = () => {
  const {store, persistor} = configureStore();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="FilterMenu" component={FilterMenu} />
            <Stack.Screen name="HomeApp" component={BottomNavigator} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="EditMenu" component={EditMenu} />
          </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
