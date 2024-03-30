import React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View } from 'react-native'
import Profile from '../home/comps/Profile'

const Detail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainContainer>
        <Profile style={{ border: 1 }} />
        <ImageCollections>
          <TopImg>
            <OneProduct>
              <OneProductImage
                resizeMode='cover'
                source={require('../../../assets/images/02.png')}
              />
            </OneProduct>
          </TopImg>
          <ButtomImg></ButtomImg>
        </ImageCollections>
        <Description />
        <Actions />
      </MainContainer>
    </SafeAreaView>
  )
}

export default Detail

export const SubContainer = styled.View`
  display: flex;
  border: 1px;
  border-color: lightgray;
  height: 120px;
`
const MainContainer = styled(SubContainer)`
  display: flex;
  font-size: 1.5em;
  align-items: stretch;
  margin-left: 10px;
  margin-right: 10px;
  flex: 1; /* Added flex: 1 to make MainContainer take all available space */
  border: 1px;
`
const ImageCollections = styled(SubContainer)`
  display: flex;
  flex: 5.5;
`
const TopImg = styled(SubContainer)`
  display: flex;
  flex: 5.5;
`
const OneProductImage = styled.ImageBackground`
  overflow: hidden;
  border: 0px;
  height: 200px;
  width: 100%;
  border-radius: 15px;
  margin-right: 15px;
`

const Description = styled(SubContainer)`
  flex: 1;
`
const Actions = styled(SubContainer)`
  flex: 1;
`
