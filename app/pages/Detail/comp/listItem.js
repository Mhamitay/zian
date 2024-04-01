import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const ListItem = ({ id, image }) => {
  return (
    <Container>
      <ProductImage
        key={id}
        resizeMode='cover'
        source={require('../../../../assets/images/02.png')}
      />
      <TextPrice>$120</TextPrice>
    </Container>
  )
}

export default ListItem

const Container = styled.View`
  flex: 1;
  margin-bottom: 15px;
`
const ProductImage = styled.ImageBackground`
  flex: 1;
  overflow: hidden;
  height: 156px;
  border-radius: 15px;
  margin: 5px;
`
const TextPrice = styled.Text`
  font-weight: bold;
  font-size: 25px;
  padding-left: 5px;
`
