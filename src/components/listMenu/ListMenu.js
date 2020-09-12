import React from 'react'
import {Text, View, Image,ScrollView, TouchableOpacity } from 'react-native'
import {Card, CardItem} from 'native-base';

const ListMenu = () => {
    return(
        <>
             <ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>              
                    <TouchableOpacity> 
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
                    </TouchableOpacity>   
                    <TouchableOpacity> 
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
                    </TouchableOpacity>               
                    <TouchableOpacity> 
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
                    </TouchableOpacity>         
                    <TouchableOpacity> 
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
                    </TouchableOpacity>                
                </View>

                </ScrollView>

        </>
    )
}

export default ListMenu