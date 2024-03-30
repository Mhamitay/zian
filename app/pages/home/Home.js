import React from 'react'
import styled from 'styled-components/native'
import Product from '../../widgets/product/Product'

const Home = (props) => {
  const list = ['A', 'B', 'C']

  const renderItem = ({ item }) => <Product />

  return (
    <>
      {/* <TopBannerView /> */}
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
          {/* <FlatList
            data={list}
            renderItem={renderItem}asdfads
            keyExtractor={(item, index) => index.toString()}
            horizontal={true} // Render items horizontally
          /> */}
          <Product />
        </ProductView>
        <TabsView>
          <Tab />
          <Tab />
          <Tab />
          <Tab />
          <Tab />
        </TabsView>
      </MainContainer>
    </>
  )
}

const TopBannerView = styled.View`
  height: 12px;
  padding: 17px;
`
const MainContainer = styled.View`
  display: flex;
  padding-top: 10px;
  font-size: 1.5em;
  align-items: stretch;
  flex: 1; /* Added flex: 1 to make MainContainer take all available space */
`
const SubContainer = styled.View`
  display: flex;
  border: 0.3px;
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
  flex: 2;
`
const TabsView = styled(SubContainer)`
  flex-direction: row;
`
const Tab = styled(SubContainer)`
  border: 1px;
  border-color: grey;
  display: flex;
  flex: 1;
`
export default Home
