import React from 'react'
import styled from 'styled-components/native'
import Product from '../../widgets/product/Product'
import { Data } from '../../shared/data'
import { FlatList, Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  const getUserListlimited = () => {}
  const renderItem = ({ item, i }) => {
    //
    console.log('Home ')
    console.log(item)
    console.log(item.id)
    console.log(item.image)
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
          <ProfileImage></ProfileImage>
        </Avatar>
      </PorfileView>
      <CategoriesView />
      <ProductView>
        <Text>Trending now </Text>
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
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
      </TabsView>
    </MainContainer>
    //</SafeAreaView>
  )
}

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
const SubContainer = styled.View`
  display: flex;
  border: 0px;
  border-color: lightgray;
  height: 120px;
`
//#region - Top section
const PorfileView = styled(SubContainer)`
  background-color: white;
  flex-direction: row;
  justify-content: space-around;
  justify-items: stretch;
  align-items: stretch;
  flex: 0.6;
`
const Title = styled.View`
  flex: 4.2;
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
  margin-right: 10px;
`
const ProfileImage = styled.View`
  height: 80px;
  border-radius: 80px;
  background-color: #ffe4e1;
`
//#endregion
const CategoriesView = styled(SubContainer)`
  flex: 0.7;
`
const ProductView = styled(SubContainer)`
  flex: 1;
`
const TabsView = styled(SubContainer)`
  background-color: #dcdcdc;
  flex-direction: row;
  padding: 15px;
  height: 80px;
  border-radius: 100px;
  margin-bottom: 10px;
`
const Tab = styled(SubContainer)`
  display: flex;
  flex: 1;
`
export default Home
