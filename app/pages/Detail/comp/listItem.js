import React from 'react'
import { Text, TouchableOpacity, View, Image, Pressable } from 'react-native'
import styled from 'styled-components/native'
import { Colors } from '../../../shared/data'
import { router } from 'expo-router'
import * as Animatable from 'react-native-animatable';

const ListItem = ({ _id, img, price, item, index, catid }) => {

  // const imageUri = "../../../../assets/images/" + String(catid)+ "/0" + (index + 1) + ".jpg";
  let imageUri = `../../../../assets/images/${catid}/0${index + 1}.jpg`;
  console.log(imageUri)

  const press = () => {

    console.log(catid)
    router.push({
      pathname: '/pages/Detail/',
      params: { item: JSON.stringify(item) },
    })
  }

  return (
    <Container>
      <Animatable.View
        animation="fadeIn"
        duration={1500}
        delay={index * 200}
      >
        {/* // router.navigate('../../pages/Detail')}> */}
        {/* <Pressable onPress={press}> */}
          <ProductImage
            key={_id}
            resizeMode='cover'
            source={{uri:img}}
          />
        {/* </Pressable> */}
        <TextPrice>${price}</TextPrice></Animatable.View>
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
 overflow:hidden;
  height: 220px;
  border-radius: 15px;
  border-color: ${Colors.gray};
  margin: 5px;
  border:0px;

`
const TextPrice = styled.Text`
  font-weight: bold;
  font-size: 25px;
  padding-left: 15px;
`
