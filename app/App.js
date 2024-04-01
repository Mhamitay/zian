import React from 'react'
import Home from './pages/home/Home'
import styled from 'styled-components/native'
import ProductList from './pages/productList/ProductList'
import Detail from './pages/Detail/detail'

function App() {
  return <ProductList />
}

const MainContainer = styled.View`
  padding: 10;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
export default App
