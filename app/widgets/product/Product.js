import React from 'react'
import { ImageBackground, Text } from 'react-native'
import styled from 'styled-components/native'

const Product = ({ id,img }) => {
  return (
    <ProductContainer>
      <Image_Background
        resizeMode='cover'
        //source={{ uri: img }}
        source={require('../../../assets/images/prod.png')}
      />
    </ProductContainer>
  )
}

//#region Style
const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 15px;
  flex: 1;
`
const ProductContainer = styled.View`
  background-color: #d1bea8;
  flex-direction: row;
  border-radius: 50px;
  overflow: hidden;
  height:300px;
  width:340px;
  margin-right:15px;
`

const Image_Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`
//#endregion
export default Product
