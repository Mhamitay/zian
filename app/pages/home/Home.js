import React from 'react'
import styled from 'styled-components/native'
import Product from '../../widgets/product/Product'
import { Data, Categories } from '../../shared/data'
import { FlatList, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import CategoryItem from '../../widgets/product/CategoryItem'

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
    // <SafeAreaView style={{ flex: 1 }}>
    <MainContainer>
      <PorfileView>
        <Title>
          <TitleText>متجر زين</TitleText>
        </Title>
        <Avatar>
          <ProfileImage>
            <Logo
              name='alpha-z-circle'
              size={50}
              color='#644117'
            />
          </ProfileImage>
        </Avatar>
      </PorfileView>
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
      <OneProduct>
        <OneProductImage
          resizeMode='cover'
          source={require('../../../assets/images/02.png')}
        />
      </OneProduct>
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
        <Tab>
          <AntDesign
            name='home'
            size={29}
            color='white'
          />
        </Tab>
        <Tab style={{ backgroundColor: '#dcdcdc' }}>
          {/* <Icon
            iconName={StorefrontIcon}
            iconSize={20}
            iconColor={'red'}
            IconBorderColor={'white'}
          /> */}
          <Feather
            name='shopping-cart'
            size={29}
            color='gray'
          />
        </Tab>
        <Tab style={{ backgroundColor: '#dcdcdc' }}>
          <MyMaterialCommunityIcons
            name='access-point'
            size={24}
          />
        </Tab>
        <Tab style={{ backgroundColor: '#dcdcdc' }}>
          <AntDesign
            name='hearto'
            size={29}
            color='gray'
          />
        </Tab>
      </TabsView>
    </MainContainer>
    //</SafeAreaView>
  )
}

const SubContainer = styled.View`
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
  padding: 10px;
  font-size: 1.5em;
  align-items: stretch;
  flex: 1; /* Added flex: 1 to make MainContainer take all available space */
`

//#region - Top section
const PorfileView = styled(SubContainer)`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
  justify-items: stretch;
  align-items: stretch;
  flex: 0.3;
`
const Title = styled.View`
  flex: 2.2;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TitleText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  justify-content: center;
`
const Avatar = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-right: 10px;
`
const ProfileImage = styled.View`
  height: 80px;
  width: 80px;

  border-radius: 50px;
  background-color: #ffe4e1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 90px;
`
const Logo = styled(MaterialCommunityIcons)``
//#endregion
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
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
  margin-left: 10px;
  border: 0px;
  text-align: right;
`

const TabsView = styled(SubContainer)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #dcdcdc;
  padding: 0px;
  margin-top: 10px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
`
const Tab = styled(SubContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: #242124;
  border-radius: 50px;
  border-color: #ff878d;
`
const MyMaterialCommunityIcons = styled(MaterialCommunityIcons)`
  color: gray;
  font-size: 40px;
`

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
