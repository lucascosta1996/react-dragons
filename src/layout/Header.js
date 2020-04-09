import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/StyleGuide'
import { useAuthState } from '../context/AuthenticationContext'
import Logout from '../components/Logout/Logout'

const HeaderWrapper = styled.header`
  background: #B3FFAB;
  background-image: linear-gradient(to right,${colors.green},${colors.blue});
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-top: 150px;
  position: relative;

  h2 {
    color: ${colors.purple};
    padding-bottom: 20px;
    padding-left: 30px;
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
    font-weight: 700;
  }
`

function Header() {
  const { userLoggedIn } = useAuthState()
  return (
    <HeaderWrapper>
      <h2>
        { userLoggedIn.email }
      </h2>
      <Logout />
    </HeaderWrapper>
  )
}

export default Header
