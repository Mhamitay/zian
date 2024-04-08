import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { router } from 'expo-router'

export default function CategoryItem({ _id, tId, name }) {
  const press = () => {
    console.log('pressed .................')
    router.push({ pathname: `/pages/productList/`, params: tId }) // Remove the braces in params
  }

  return (
    <Container key={tId}>
      <Pressable onPress={press}>
        <Item>
          <ItemName>{name}</ItemName>
        </Item>
      </Pressable>
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  justify-content: space-between;
  justify-items: center;
`

const Item = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 60px;
  margin-right: 8px;
  border: 2px;
  border-radius: 40px;
  border-color: lightgray;
`

const ItemName = styled.Text`
  font-size: 20px;
  color: gray;
`
