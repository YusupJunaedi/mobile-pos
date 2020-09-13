import React, {Fragment} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {minusQtyCreator, plusQtyCreator} from '../../redux/actions/action';

const ListCart = () => {
  const listCart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  console.log(listCart);

  const handlePlus = (id) => {
    const index = listCart.findIndex((item) => {
      return item.id_product === id;
    });

    dispatch(plusQtyCreator(index));
  };

  const handleMinus = (id) => {
    const index = listCart.findIndex((item) => {
      return item.id_product === id;
    });
    dispatch(minusQtyCreator(index));
  };

  return (
    <>
      <View style={{marginTop: 30, flex: 1}}>
        {listCart.length ? (
          <Fragment>
            <View style={{flex: 1}}>
              {listCart.map((item) => {
                return (
                  <View
                    style={{flexDirection: 'row', marginBottom: 20}}
                    key={item.id_product}>
                    <Image
                      source={{
                        uri: item.img_product,
                      }}
                      style={{
                        width: 100,
                        height: 80,
                        flex: 1,
                        marginHorizontal: 10,
                      }}
                    />
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        onPress={() => handleMinus(item.id_product)}>
                        <Image
                          source={require('../../assets/icons/minus.png')}
                          style={{width: 25, height: 25}}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          borderBottomWidth: 1,
                          borderColor: 'green',
                          textDecorationLine: 'underLine',
                          paddingHorizontal: 5,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            width: 50,
                            textAlign: 'center',
                            fontSize: 20,
                          }}>
                          {item.qty}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => handlePlus(item.id_product)}>
                        <Image
                          source={require('../../assets/icons/add.png')}
                          style={{width: 25, height: 25}}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        Rp. {item.price_product * item.qty}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View
              style={{
                height: 80,
                borderTopWidth: 1,
                borderColor: '#e8e8e8',
                flexDirection: 'row',
              }}>
              <View style={{justifyContent: 'center', flex: 1, marginLeft: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Total Harga
                </Text>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#B82601'}}>
                  Rp.{' '}
                  {listCart.reduce((total, item) => {
                    return total + item.price_product * item.qty;
                  }, 0)}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  alignItems: 'flex-end',
                  marginRight: 20,
                }}>
                <Button block rounded success on>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                    Buy
                  </Text>
                </Button>
              </View>
            </View>
          </Fragment>
        ) : (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              No list cart !
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

export default ListCart;
