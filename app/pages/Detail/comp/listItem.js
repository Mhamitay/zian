import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import styled from 'styled-components/native'
import Profile from '../../../shared/Profile'
import { Colors } from '../../../shared/data'

const ListItem = ({ _id, img, price }) => {
  const imageUri = img
  return (
    <Container>
      <TouchableOpacity onPress={() => router.navigate('../../pages/Detail')}>
        <ProductImage
          key={_id}
          resizeMode='cover'
          source={{ uri: imageUri }}
        />
      </TouchableOpacity>
      <TextPrice>${price}</TextPrice>
    </Container>
  )
}

export default ListItem

const Container = styled.View`
  flex: 1;
  margin-bottom: 15px;
  border: 0px;
  height: 270px;
`
const ProductImage = styled.ImageBackground`
  overflow: hidden;
  height: 220px;
  border-radius: 15px;
  border: 3px;
  border-color: ${Colors.gray};
  margin: 5px;
`
const TextPrice = styled.Text`
  font-weight: bold;
  font-size: 25px;
  padding-left: 15px;
`
