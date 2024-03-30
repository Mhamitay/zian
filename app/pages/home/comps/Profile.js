import React from 'react'
import styled from 'styled-components/native'
import Logo from '../../../shared/logo'
const Profile = () => {
  return (
    <PorfileView>
      <Title>
        <TitleText>متجر زين</TitleText>
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
  border-color: lightgray;
  height: 120px;
`

//#region - Top section
const PorfileView = styled(SubContainer)`
  flex-direction: row;
  justify-content: space-around;
  justify-items: stretch;
  align-items: stretch;
  border: 0px;
`
const Title = styled.View`
  flex: 2.2;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TitleText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  justify-content: center;
`
const Avatar = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-right: 10px;
`
const ProfileImage = styled.View`
  height: 80px;
  width: 80px;

  border-radius: 50px;
  background-color: #ffeaed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 90px;
`
// const Logo = styled(MaterialCommunityIcons)``
//#endregion
