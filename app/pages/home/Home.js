import React from 'react'
import styled from 'styled-components/native'

import Product from '../../widgets/product/Product'
import { Data, Categories, Colors } from '../../shared/data'
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native'

import CategoryItem from '../../widgets/product/CategoryItem'
import Icon from '../../shared/icon'
import Profile from './comps/Profile'

const Home = () => {
  //const getUserListlimited = () => {}

  const renderCategories = ({ item, i }) => {
    return (
      <Pressable>
        <CategoryItem name={item.name}></CategoryItem>
      </Pressable>
    )
  }

  const renderItem = ({ item, i }) => {
    const StorefrontIcon = 'StorefrontIcon'

    return (
      <Pressable>
        <Product
          id={item.id}
          img={item.image}
        />
      </Pressable>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainContainer>
        <Profile />
        <CategoriesView>
          <FlatList
            onScroll={(e) => {
              //scrollY.setValue(e.nativeEvent.contentOffset.y)
            }}
            data={Categories}
            //numColumns={2}
            renderItem={renderCategories}
            horizontal={true}
            keyExtractor={(item) => `key-${item.id}`}
            initialNumToRender={1}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        </CategoriesView>
        {/* <OneProduct>
          <OneProductImage
            resizeMode='cover'
            source={require('../../../assets/images/02.png')}
          />
        </OneProduct> */}
        <ProductView>
          <Trending>الاكثر طلبا.. </Trending>
          <FlatList
            onScroll={(e) => {
              //scrollY.setValue(e.nativeEvent.contentOffset.y)
            }}
            data={Data}
            //numColumns={2}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={(item) => `key-${item.id}`}
            initialNumToRender={1}
            showsVerticalScrollIndicator={false}
            // refreshControl={
            //   <RefreshControl
            //     size='large'
            //     title='please waite...'
            //     colors={['white']}
            //     progressBackgroundColor='orange'
            //     refreshing={isLoading}
            //     onRefresh={() => getUserListlimited()}
            //   />
            // }
          ></FlatList>
        </ProductView>
        <TabsView>
          <Tab style={{ backgroundColor: Colors.black }}>
            <Icon
              iconName='home'
              iconSize={29}
              iconColor={'white'}
              IconBorderColor={'white'}
            />
          </Tab>
          <Tab style={{ backgroundColor: Colors.gray }}>
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
          </Tab>
          <Tab style={{ backgroundColor: Colors.gray }}>
            <Icon
              iconName='tago'
              iconSize={29}
              iconColor={'gray'}
              IconBorderColor={'white'}
            />
          </Tab>
          <Tab style={{ backgroundColor: Colors.gray }}>
            <Icon
              iconName='hearto'
              iconSize={29}
              iconColor={'gray'}
              IconBorderColor={'white'}
            />
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
  margin-left: 10px;
  margin-right: 10px;
  flex: 1; /* Added flex: 1 to make MainContainer take all available space */
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
