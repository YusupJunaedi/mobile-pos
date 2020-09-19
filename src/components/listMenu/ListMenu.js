import React, {Fragment, useState, useEffect} from 'react';

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Card, CardItem} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {
  addToCartCreator,
  plusQtyCreator,
  getMoreMenuCreator,
  getAllMenuCreator,
} from '../../redux/actions/action';

const ListMenu = ({navigation}) => {
  const listMenu = useSelector((state) => state.menu.data);
  const listCarts = useSelector((state) => state.cart.data);
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(listMenu.length);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMenuCreator());
  }, []);

  // useEffect(() => {
  //   dispatch(getMoreMenuCreator(page));
  // }, [page]);

  const getMoreMenu = () => {
    setPage(page + 1);
    dispatch(getMoreMenuCreator(page));
  };

  const addToCart = (id, name, price, img) => {
    const index = listCarts.findIndex((item) => {
      return item.id_product === id;
    });

    if (index >= 0) {
      dispatch(plusQtyCreator(index));
    } else {
      const newCart = {
        id_product: id,
        name_product: name,
        qty: 1,
        price_product: price,
        img_product: img,
      };
      dispatch(addToCartCreator(newCart));
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity
          onPress={() => {
            addToCart(
              item.id_product,
              item.name_product,
              item.price_product,
              item.img,
            );
            navigation.navigate('Orders');
          }}>
          <Card style={{width: 180}}>
            <CardItem cardBody>
              <Image
                source={{
                  uri: item.img,
                }}
                style={{height: 100, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>{item.name_product}</Text>
            </CardItem>
            <CardItem style={{justifyContent: 'center', marginTop: -15}}>
              <Text style={{fontWeight: 'bold'}}>Rp. {item.price_product}</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#4abdac" />
      </View>
    );
  };

  return (
    <>
      {listMenu === undefined ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Menu not found!
          </Text>
        </View>
      ) : listMenu.length ? (
        <SafeAreaView>
          <FlatList
            numColumns={2}
            data={listMenu}
            renderItem={renderItem}
            keyExtractor={(item) => item.id_product}
            onEndReached={getMoreMenu}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
          />
        </SafeAreaView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Loading...
          </Text>
        </View>
      )}
    </>
  );
};

export default ListMenu;
