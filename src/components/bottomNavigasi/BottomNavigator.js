import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Orders from '../../screens/Orders';
import Account from '../../screens/Account';
import {useSelector} from 'react-redux';
import HomeAdmin from '../../screens/HomeAdmin';
import AddMenu from '../../screens/AddMenu';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#4abdac'}}>
      <Tab.Screen
        name="HomeAdmin"
        component={HomeAdmin}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" size={25} />,
        }}
      />
      <Tab.Screen
        name="AddMenu"
        component={AddMenu}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: () => <Icon name="plus-square" size={25} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => <Icon name="user-alt" size={25} />,
        }}
      />
    </Tab.Navigator>

    // <Tab.Navigator
    //   activeColor="#f0edf6"
    //   inactiveColor="#3e2465"
    //   barStyle={{backgroundColor: '#4abdac'}}>
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarIcon: () => <Icon name="home" size={25} />,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Orders"
    //     component={Orders}
    //     options={{
    //       tabBarLabel: 'Orders',
    //       tabBarIcon: () => <Icon name="shopping-cart" size={25} />,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Account"
    //     component={Account}
    //     options={{
    //       tabBarLabel: 'Account',
    //       tabBarIcon: () => <Icon name="user-alt" size={25} />,
    //     }}
    //   />
    // </Tab.Navigator>
  );

  // if (isAdmin) {
  //   return (
  //     <Tab.Navigator
  //       activeColor="#f0edf6"
  //       inactiveColor="#3e2465"
  //       barStyle={{backgroundColor: '#4abdac'}}>
  //       <Tab.Screen
  //         name="Home"
  //         component={HomeAdmin}
  //         options={{
  //           tabBarLabel: 'Home',
  //           tabBarIcon: () => <Icon name="home" size={25} />,
  //         }}
  //       />
  //     </Tab.Navigator>
  //   );
  // } else {
  //   return (
  //     <Tab.Navigator
  //       activeColor="#f0edf6"
  //       inactiveColor="#3e2465"
  //       barStyle={{backgroundColor: '#4abdac'}}>
  //       <Tab.Screen
  //         name="Home"
  //         component={Home}
  //         options={{
  //           tabBarLabel: 'Home',
  //           tabBarIcon: () => <Icon name="home" size={25} />,
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Orders"
  //         component={Orders}
  //         options={{
  //           tabBarLabel: 'Orders',
  //           tabBarIcon: () => <Icon name="shopping-cart" size={25} />,
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Account"
  //         component={Account}
  //         options={{
  //           tabBarLabel: 'Account',
  //           tabBarIcon: () => <Icon name="user-alt" size={25} />,
  //         }}
  //       />
  //     </Tab.Navigator>
  //   );
  // }
};

export default BottomNavigator;
