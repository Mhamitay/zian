import React from 'react'
import styled from 'styled-components/native'
import Logo from './logo'
import { Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from './icon'
import { Colors } from './data'

const Profile = ({ title, isHome }) => {
  const navigation = useNavigation()

  return (
    <PorfileView>
      {isHome ?? (
        <Back>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon
              iconName='back'
              iconSize={30}
              iconColor={'black'}
              IconBorderColor={'white'}
            />
          </Pressable>
        </Back>
      )}
      <Title>
        <TitleText>{title}</TitleText>
      </Title>
      <Avatar>
        <ProfileImage>
          <Logo />
        </ProfileImage>
      </Avatar>
    </PorfileView>
  )
}

export default Profile

export const SubContainer = styled.View`
  display: flex;
  border: 0px;
  border-color: red;
  height: 120px;
`

const Back = styled.View`
  display: flex;
  height: 100%;
  flex: 1;
  border: 0px;
  border-color: red;
  justify-content: start;
  align-items: start;
  align-content: start;
`
const BackText = styled.Text`
  font-weight: bold;
  font-size: 30px;
`

//#region - Top section
const PorfileView = styled(SubContainer)`
  flex-direction: row;
  justify-content: space-around;
  justify-items: start;
  align-items: start;
  border: 0px;
  padding-bottom: 15px;
  height: 70px;
`
const Title = styled.View`
  display: flex;
  flex: 3.5;
  justify-content: center;
  border: 0px;
`
const TitleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: right;
  align-self: center;
`
const Avatar = styled.View`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
const ProfileImage = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 90px;
  border: 1px;
  background-color: ${Colors.gray};
`
// const Logo = styled(MaterialCommunityIcons)``
//#endregion
