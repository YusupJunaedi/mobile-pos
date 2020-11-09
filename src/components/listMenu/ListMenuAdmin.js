import React, {Fragment, useState, useEffect} from 'react';
import Axios from 'axios';
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
import {Card, CardItem, Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {
  getMoreMenuCreator,
  getAllMenuCreator,
  dataEditMenuCreator,
} from '../../redux/actions/action';
import Modal from 'react-native-modal';

const ListMenuAdmin = ({navigation}) => {
  const listMenu = useSelector((state) => state.menu.data);

  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState({
    id_product: null,
    nameProduct: null,
    priceProduct: null,
    category: null,
    imgProduct: null,
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMenuCreator());
    setPage(2);
  }, []);

  const getMoreMenu = () => {
    setPage(page + 1);
    dispatch(getMoreMenuCreator(page));
  };

  const deleteMenu = () => {
    const URI = `http://54.166.172.106:8000/deleteproduct/${product.id_product}`;
    return Axios.delete(URI).then((res) => {
      dispatch(getAllMenuCreator());
      setPage(2);
    });
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity
          onPress={() => {
            toggleModal();
            setProduct({
              id_product: item.id_product,
              nameProduct: item.name_product,
              priceProduct: item.price_product,
              category: item.category_id,
              imgProduct: item.image,
            });
          }}>
          <Card style={{width: 180}}>
            <CardItem cardBody>
              <Image
                source={{
                  uri: item.image,
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
      <View>
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInLeft"
          animationOut="slideOutRight">
          <View
            style={{
              backgroundColor: 'white',
              padding: 22,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              borderColor: 'rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}>
            <Button
              rounded
              style={{
                width: 45,
                position: 'absolute',
                top: -15,
                right: -15,
                backgroundColor: 'white',
              }}
              onPress={() => toggleModal()}>
              <Text
                style={{
                  fontSize: 20,
                  justifyContent: 'center',
                  marginLeft: 15,
                }}>
                X
              </Text>
            </Button>
            <Text style={{fontSize: 20, marginBottom: 12}}>Action Menu ?</Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{paddingHorizontal: 10}}>
                <TouchableOpacity>
                  <Button
                    style={{width: 100}}
                    block
                    rounded
                    warning
                    onPress={() => {
                      dispatch(dataEditMenuCreator(product));
                      toggleModal();
                      setPage(2);
                      navigation.navigate('EditMenu');
                    }}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>
                      Edit
                    </Text>
                  </Button>
                </TouchableOpacity>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <TouchableOpacity>
                  <Button
                    style={{width: 100}}
                    block
                    rounded
                    danger
                    onPress={() => {
                      deleteMenu();
                      toggleModal();
                    }}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>
                      Delete
                    </Text>
                  </Button>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default ListMenuAdmin;
