import React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, Text, View } from 'react-native'
import Profile from '../home/comps/Profile'
import { Colors } from '../../shared/data'
import Icon from '../../shared/icon'

const Detail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainContainer>
        <Profile />
        <ImageCollections>
          <TopImg>
            <OneProductImage
              resizeMode='cover'
              source={require('../../../assets/images/02.png')}
            />
          </TopImg>
          <ButtomImg>
            <BImage
              resizeMode='cover'
              source={require('../../../assets/images/02.png')}
            />
            <BImage
              resizeMode='cover'
              source={require('../../../assets/images/02.png')}
            />
          </ButtomImg>
        </ImageCollections>
        <Description>
          <TextDescription>Soja&Co</TextDescription>
          <TextName>Lavender soy candle</TextName>
          <TextPrice>$11.90</TextPrice>
        </Description>
        <Actions>
          <Count>
            <Icon
              iconName='plus'
              iconSize={20}
              iconColor={'black'}
              IconBorderColor={'white'}
            />
            <TextCount>5</TextCount>
            <Icon
              iconName='minus'
              iconSize={20}
              iconColor={'black'}
              IconBorderColor={'white'}
            />
          </Count>
          <AddToCart>
            <AddToCartText>Add to cart</AddToCartText>
          </AddToCart>
        </Actions>
      </MainContainer>
    </SafeAreaView>
  )
}

export default Detail

const SubContainer = styled.View`
  display: flex;
  border-color: lightgray;
  height: 120px;
`
const Actions = styled(SubContainer)`
  display: flex;
  flex-direction: row;
  align-content: center;
  flex: 1;
  align-items: center;
  gap: 5px;
`

const Count = styled(SubContainer)`
  flex: 1;
  height: 80px;
  border-radius: 50px;
  background-color: ${Colors.gray};
  flex-direction: row;
  justify-content: space-evenly;
  align-items:center;
`
const TextCount =styled.Text`
font-size:20px
`

const AddToCart = styled(SubContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1.5;
  height: 80px;
  border-radius: 50px;
  background-color: ${Colors.black};
`
const AddToCartText = styled.Text`
  color: #fff;
  font-size: 20px;
`

const MainContainer = styled(SubContainer)`
  display: flex;
  font-size: 1.5em;
  align-items: stretch;
  margin-left: 10px;
  margin-right: 10px;
  flex: 1; /* Added flex: 1 to make MainContainer take all available space */
`
const ImageCollections = styled(SubContainer)`
  display: flex;
  flex: 3;
  gap: 10px;
`
const TopImg = styled(SubContainer)`
  overflow: hidden;
  flex: 2;
`
const OneProductImage = styled.ImageBackground`
  height: 100%;
  width: 100%;
  border-radius: 35px;
  overflow: hidden;
`

const ButtomImg = styled(SubContainer)`
  flex-direction: row;
  flex: 1;
  gap: 10px;
  overflow: hidden;
`
const BImage = styled.ImageBackground`
  overflow: hidden;
  flex: 1;
  border-radius: 27px;
`

const OneProduct = styled(SubContainer)`
  height: 300px;
`
const Description = styled(SubContainer)`
  flex: 1;
`
const TextDescription = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 35px;
  color: #414a4c;
`
const TextName = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  font-weight: bold;
`
const TextPrice = styled.Text`
  font-size: 27px;
  font-weight: bold;
  margin-top: 5px;
`
