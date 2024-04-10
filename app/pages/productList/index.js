import React ,{ View,Text, Image}  from 'react'
import styled from 'styled-components/native'
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import ListItem from '../Detail/comp/listItem'
import Profile from '../../shared/Profile'
import useSWR from 'swr'
import { useRoute } from '@react-navigation/native' // Import useNavigation and useRoute
import { Colors } from '../../shared/data'
import Icon from '../../shared/icon'

const ProductList = () => {
  const route = useRoute() // Get route object
  const { id } = route.params // The entire params object will be tId

  const title = 'قائمة المنتجات'

  const productFetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data: productData, error: productError } = useSWR(
    `https://zain-backend-01.vercel.app/api/product/${id}`,
    productFetcher
  )

  const renderItem = ({ item ,index}) => (
    <ListItem
      key={item._id}
      _id={item._id}
      img={item.img}
      price={item.price}
      catid={item.catid}
      item={item}
      index={index}
    />
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainContainer>
        <Profile title={title} />
        {productData ? (
          <FlatList
            data={productData}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => `key-${item._id}`}
          />
        ) : (
          <LoadingContainer>

            <BGImage source={require('../../../assets/images/loading/1.gif')} />
          </LoadingContainer>
        )}
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
const LoadingContainer = styled.View`
  display:flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BGImage = styled.ImageBackground`
height:400px;
width:400px
`

const TabsView = styled(SubContainer)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${Colors.gray};
  padding: 0px;
  margin-top: 15px;
  height: 80px;
  border-radius: 100px;
`

const Tab = styled(SubContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 50px;
`