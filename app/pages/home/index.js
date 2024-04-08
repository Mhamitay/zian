import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import Product from '../product'
import { Populars, Colors } from '../../shared/data'
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from 'react-native'

import CategoryItem from '../product/CategoryItem'
import Icon from '../../shared/icon'
import Profile from '../../shared/Profile'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useSwR from 'swr'

const Home = () => {
  //#region States
  const title = 'متجر زين'

  const Categoriesfetcher = (...args) =>
    fetch(...args).then((res) => res.json())
  const { data, error } = useSwR(
    'https://zain-backend-01.vercel.app/api/categories',
    Categoriesfetcher
  )

  const renderCategories = ({ item, i }) => {
    return (
      <CategoryItem
        _id={item._id}
        tId={item.tId}
        name={item.name}
      />
    )
  }
  const renderItem = ({ item, i }) => {
    const StorefrontIcon = 'StorefrontIcon'

    return (
      <Product
        key={item.id}
        id={item.id}
        img={item.image}
      />
    )
  }
  //#endregion

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainContainer>
        <Profile
          title={title}
          isHome={true}
        />
        <CategoriesView>
          {data ? (
            <FlatList
              onScroll={(e) => {
                //scrollY.setValue(e.nativeEvent.contentOffset.y)
              }}
              data={data.categories}
              renderItem={renderCategories}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => `key-${item._id}`}
              initialNumToRender={1}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator
                size='large'
                color='lightgray'
              />
            </View>
          )}
        </CategoriesView>
        <ProductView>
          <Trending>الاكثر طلبا.. </Trending>
          <FlatList
            onScroll={(e) => {
              //scrollY.setValue(e.nativeEvent.contentOffset.y)
            }}
            data={Populars}
            //numColumns={2}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={(item) => `key-${item.id}`}
            initialNumToRender={1}
            showsVerticalScrollIndicator={false}
          />
        </ProductView>
        <TabsView>
          <Tab style={{ backgroundColor: Colors.black }}>
            <TouchableOpacity onPress={() => router.push('/pages/checkout')}>
              <Icon
                iconName='home'
                iconSize={29}
                iconColor={'white'}
                IconBorderC
                olor={'white'}
              />
            </TouchableOpacity>
          </Tab>
          <Tab style={{ backgroundColor: Colors.gray }}>
            <TouchableOpacity onPress={() => router.push('/pages/checkout')}>
              <Icon
                iconName='shoppingcart'
                iconSize={29}
                iconColor={'gray'}
                IconBorderColor={'white'}
              />
              {/* <AntDesign name="shoppingcart" size={29} color="gray" /> */}
              {/* <Feather
            name='shopping-cart'
            size={29}
            color='gray'

          /> */}
            </TouchableOpacity>
          </Tab>
          <Tab style={{ backgroundColor: Colors.gray }}>
            <TouchableOpacity onPress={() => router.push('/pages/orders')}>
              <Icon
                iconName='tago'
                iconSize={29}
                iconColor={'gray'}
                IconBorderColor={'white'}
              />
            </TouchableOpacity>
          </Tab>
          <Tab style={{ backgroundColor: Colors.gray }}>
            <TouchableOpacity onPress={() => router.push('/pages/favorites')}>
              <Icon
                iconName='hearto'
                iconSize={29}
                iconColor={'gray'}
                IconBorderColor={'white'}
              />
            </TouchableOpacity>
          </Tab>
        </TabsView>
      </MainContainer>
    </SafeAreaView>
  )
}

export const SubContainer = styled.View`
  display: flex;
  border: 0px;
  border-color: lightgray;
  height: 120px;
`

const TopBannerView = styled.View`
  height: 12px;
  padding: 17px;
`
const MainContainer = styled.View`
  display: flex;
  font-size: 1.5em;
  align-items: stretch;
  flex: 1; /* Added flex: 1 to make MainContainer take all available space */
  border: 0px;
  padding: 15px;
`

const CategoriesView = styled(SubContainer)`
  flex: 0.2;
`
const OneProduct = styled.View`
  flex: 0.6;
`

const ProductView = styled(SubContainer)`
  flex: 1;
`
const Trending = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
  padding: 8px;
  border: 0px;
  text-align: right;
`

const TabsView = styled(SubContainer)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${Colors.gray};
  padding: 0px;
  margin-top: 15px;
  height: 100px;
  border-radius: 100px;
`
const Tab = styled(SubContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 50px;
`
// const MyMaterialCommunityIcons = styled(MaterialCommunityIcons)`
//   color: gray;
//   font-size: 40px;
// `

const Item = styled.View`
  width: 120px;
  height: 50px;
  border: 2px;
  border-radius: 40px;
  border-color: lightgray;
`

const OneProductImage = styled.ImageBackground`
  /* border-radius: 50px; */
  overflow: hidden;
  border: 0px;
  height: 200px;
  width: 100%;
  border-radius: 15px;
  margin-right: 15px;
`

export default Home
