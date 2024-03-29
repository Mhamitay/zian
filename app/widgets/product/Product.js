import React from 'react'
import styled from 'styled-components/native'

const Product = (props) => {
  const list = ['A', 'B', 'C']

  return (
    <>
      <TrendingTitle>Trending now</TrendingTitle>
      <Container>
        <ProductContainer></ProductContainer>
      </Container>
    </>
  )
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 15px;
  flex: 1;
`
const ProductContainer = styled.View`
  background-color: #d1bea8;
  flex-direction: row;
  flex: 1;
  border-radius: 50px;
  width: 85%;
`
const TrendingTitle = styled.View`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`
export default Product
