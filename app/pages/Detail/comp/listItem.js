import React from 'react'
import { Text, TouchableOpacity, View, Image, Pressable } from 'react-native'
import styled from 'styled-components/native'
import { Colors } from '../../../shared/data'
import { router } from 'expo-router'

const ListItem = ({ _id, img, price, item }) => {
  const imageUri = img

  const press = () => {
    console.log(item)
    router.push({
      pathname: '/pages/Detail/',
      params: { item: JSON.stringify(item) },
    })
  }

  return (
    <Container>
      {/* // router.navigate('../../pages/Detail')}> */}
      <Pressable onPress={press}>
        <ProductImage
          key={_id}
          resizeMode='cover'
          source={{ uri: imageUri }}
        />
      </Pressable>
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
