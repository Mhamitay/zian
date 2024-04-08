import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Profile from '../../shared/Profile'

const ProductPage = () => {
  return (
    <Container>
      <Profile />
      {/* Upper Section - Picture */}
      <UpperSection>
        <ProductImage source={{ uri: 'https://via.placeholder.com/200' }} />
      </UpperSection>

      {/* Bottom Section - Title, Price, Description, Buttons */}
      <BottomSection>
        <Title>Product Title</Title>
        <Price>$99.99</Price>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper dolor vitae risus imperdiet vestibulum.
        </Description>

        {/* Buttons */}
        <ButtonsContainer>
          <SmallButton>
            <ButtonText>Small</ButtonText>
          </SmallButton>
          <LargeButton>
            <ButtonText>Large</ButtonText>
          </LargeButton>
        </ButtonsContainer>
      </BottomSection>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`

const UpperSection = styled.View`
  align-items: center;
  justify-content: center;
  height: 63.67%; /* 2/3 of the page */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #e0e0e0;
`

const ProductImage = styled.Image`
  width: 80%;
  height: 80%;
  border-radius: 100px;
`

const BottomSection = styled.View`
  padding: 20px;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Price = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`

const Description = styled.Text`
  margin-bottom: 20px;
`

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const Button = styled(TouchableOpacity)`
  width: 90px; /* Set width and height to desired size */
  height: 90px;
  border-radius: 125px; /* Make it circular */
  align-items: center;
  justify-content: center;
`

const SmallButton = styled(Button)`
  background-color: #64b5f6;
  width: 270px;
  margin-right: 15px;
`

const LargeButton = styled(Button)`
  background-color: #f48fb1;
`

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

export default ProductPage
