import React from 'react'
import styled from '@emotion/styled'
import Profile from '../Profile'
import Balance from '../Balance'
import MenuContainer from '../Menu'

const SideBarContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 360px
`

export default function SideBar() {
  return (
    <SideBarContainer>
      <Profile name="Francesly Hebe" role="Software Engineer" agency="001" accountNumber="123456" avatar="https://avatars.githubusercontent.com/u/62121038?s=400&u=9dcaa2eb3e47f94db7cb778b99d20e70d3d0c2dd&v=4"/>
      <Balance amount={2000000}/>

      <MenuContainer />
      </SideBarContainer>

  )
}
