import React from 'react'
import styled from 'styled-components/native'

import { ImageBackground } from 'react-native'

const Logo = () => {
  return (
    <Image_Background
      resizeMode='cover'
      source={require('../../assets/images/logo.png')}
    />
  )
}

export default Logo

const Image_Background = styled(ImageBackground)`
  border: 1px;
  overflow: hidden;
  height: 40px;
  width: 40px;
  border-radius: 50px;
`
