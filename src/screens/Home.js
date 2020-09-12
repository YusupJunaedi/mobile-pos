import React from 'react'

import { View } from 'react-native'

import BottomNavigasi from '../components/bottomNavigasi/BottomNavigasi';
import Search from '../components/search/Search';
import ListMenu from '../components/listMenu/ListMenu';


const Home = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Search />
                <ListMenu />
            </View>
            <BottomNavigasi />
        </View>
    )
}


export default Home


