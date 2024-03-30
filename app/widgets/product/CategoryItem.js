import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

export default function CategoryItem({ name }) {
  return (
    <Container>
      <Item>
        <ItemName>{name}</ItemName>
      </Item>
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
