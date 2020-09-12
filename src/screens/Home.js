import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import {Card, CardItem} from 'native-base';

import BottomNavigasi from '../components/bottomNavigasi/BottomNavigasi';

const Home = () => {
    return (
        <View style={{flex: 1}}>

            <View style={{flex: 1}}>

                <View style={{flexDirection: 'row', paddingVertical: 10}}>
                    <View style={{position: "relative", flex: 1, marginLeft: 10}}>
                        <TextInput placeholder="What do you want ?" style={{borderWidth: 1,borderColor: "#e8e8e8", borderRadius: 25, fontSize: 16, paddingLeft: 50, paddingRight: 25}} />
                        <Image source={require("../assets/icons/search.png")} style={{width: 25, height: 25, position: "absolute", left: 15, top: 12}} />
                    </View>
                    <View style={{justifyContent: "center", alignContent: "center"}}>
                        <Image source={require("../assets/images/arkademy.png")} style={{width: 100,height: 25}} />
                    </View>
                    {/* <View style={{justifyContent: "center", alignContent: "center"}}>
                    <Image source={require("../assets/images/ilus_home.svg")} style={{width: null,height: 100}} />
                    </View> */}
                </View>

                <ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>                     
                    <Card>
                        <CardItem cardBody>
                        <Image source={{uri: 'https://www.resepistimewa.com/wp-content/uploads/ayam-goreng-kalasan-khas-yogya.jpg'}} style={{height: 100, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center'}}>
                            <Text>NAMA MAKANAN</Text>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center', marginTop:-15}}>
                            <Text>Rp. 10.000</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardBody>
                        <Image source={require("../assets/images/arkademy.png")} style={{height: 100, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center'}}>
                            <Text>NAMA MAKANAN</Text>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center', marginTop:-15}}>
                            <Text>Rp. 10.000</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardBody>
                        <Image source={require("../assets/images/contoh.png")} style={{height: 100, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center'}}>
                            <Text>NAMA MAKANAN</Text>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center', marginTop:-15}}>
                            <Text>Rp. 10.000</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardBody>
                        <Image source={require("../assets/images/arkademy.png")} style={{height: 100, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center'}}>
                            <Text>NAMA MAKANAN</Text>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center', marginTop:-15}}>
                            <Text>Rp. 10.000</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardBody>
                        <Image source={require("../assets/images/contoh.png")} style={{height: 100, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center'}}>
                            <Text>NAMA MAKANAN</Text>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center', marginTop:-15}}>
                            <Text>Rp. 10.000</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardBody>
                        <Image source={require("../assets/images/arkademy.png")} style={{height: 100, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center'}}>
                            <Text>NAMA MAKANAN</Text>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center', marginTop:-15}}>
                            <Text>Rp. 10.000</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardBody>
                        <Image source={require("../assets/images/contoh.png")} style={{height: 100, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center'}}>
                            <Text>NAMA MAKANAN</Text>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center', marginTop:-15}}>
                            <Text>Rp. 10.000</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem cardBody>
                        <Image source={require("../assets/images/arkademy.png")} style={{height: 100, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center'}}>
                            <Text>NAMA MAKANAN</Text>
                        </CardItem>
                        <CardItem style={{justifyContent: 'center', marginTop:-15}}>
                            <Text>Rp. 10.000</Text>
                        </CardItem>
                    </Card>
                </View>

                </ScrollView>

            </View>

            <BottomNavigasi />
           

            {/* <View style={{height: 55, flexDirection: "row", borderTopWidth: 1, borderColor: "#e8e8e8"}}>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../assets/icons/home.png')} style={{width: 23, height: 23}} />
                    <Text style={{color: '#545454', marginTop: 4}}>Home</Text>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../assets/icons/cart.png')} style={{width: 23, height: 23}} />
                    <Text style={{color: '#545454', marginTop: 4}}>Orders</Text>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../assets/icons/list.png')} style={{width: 23, height: 23}} />
                    <Text style={{color: '#545454', marginTop: 4}}>History</Text>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../assets/icons/user.png')} style={{width: 23, height: 23}} />
                    <Text style={{color: '#545454', marginTop: 4}}>Akun</Text>
                </View>
            </View> */}

        </View>
    )
}


export default Home

const styles = StyleSheet.create({})
