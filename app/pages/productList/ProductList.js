import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'

import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native'
import Profile from '../home/comps/Profile'
import { Colors, Data } from '../../shared/data'
import Icon from '../../shared/icon'
import Product from '../product/Product'
import ListItem from '../Detail/comp/listItem'

const ProductList = () => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        image={item.image}
      />
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainContainer>
        {/* <TopImg>
            <OneProductImage
              resizeMode='cover'
              source={require('../../../assets/images/02.png')}
            />
          </TopImg> */}
        <Button
          title='Go to Details'
          onPress={() => navigation.navigate('Home')}
        />
        <FlatList
          style={{ border: '1px' }}
          onScroll={(e) => {
            //scrollY.setValue(e.nativeEvent.contentOffset.y)
          }}
          data={Data}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => `key-${item.id}`}
          initialNumToRender={1}
          showsVerticalScrollIndicator={false}
        />
      </MainContainer>
    </SafeAreaView>
  )
}

export default ProductList

const SubContainer = styled.View`
  display: flex;
  border-color: lightgray;
  height: 120px;
`

const MainContainer = styled(SubContainer)`
  display: flex;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
`

const ProductImage = styled.ImageBackground`
  flex: 1;
  border: 1px;
  height: 156px;
  /* width: 196px;  */

  margin: 5px;
`

const OneProduct = styled(SubContainer)`
  flex: 1;
  width: 100px;
  height: 100px;
  border: 1px;
`
