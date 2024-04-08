import React from 'react'
import styled from 'styled-components/native'
import { FlatList, SafeAreaView } from 'react-native'
import ListItem from '../Detail/comp/listItem'
import Profile from '../../shared/Profile'
import useSWR from 'swr'
import { useRoute } from '@react-navigation/native' // Import useNavigation and useRoute

const ProductList = () => {
  const route = useRoute() // Get route object
  const { id } = route.params // The entire params object will be tId

  const title = 'قائمة المنتجات'

  const productFetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data: productData, error: productError } = useSWR(
    `https://zain-backend-01.vercel.app/api/product/${id}`,
    productFetcher
  )

  const renderItem = ({ item }) => (
    <ListItem
      key={item._id}
      _id={item._id}
      img={item.img}
      price={item.price}
      item={item}
    />
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainContainer>
        <Profile title={title} />
        {/* <ImageUploader /> */}
        <FlatList
          data={productData}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => `key-${item._id}`}
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
  font-size: 1.5em;
  align-items: stretch;
  flex: 1;
  padding: 15px;
`
