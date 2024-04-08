import React from 'react'
import styled from 'styled-components/native'
import ProductList from './pages/productList'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

function App() {
  return
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Home />
  </GestureHandlerRootView>
}

const MainContainer = styled.View`
  padding: 10;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
export default App
