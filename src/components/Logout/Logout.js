import React from 'react'
import styled from 'styled-components'
import { useAuthDispatch } from '../../context/AuthenticationContext'
import { colors } from '../../utils/StyleGuide'

const LogoutStyle = styled.span`
  color: ${colors.purple};
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  bottom: 20px;
  right: 30px;

  &:hover {
    opacity: 0.7;
  }
`

function Logout() {
  const dispatch = useAuthDispatch()

  function logOut() {
    dispatch({
      type: 'LOG_OUT'
    })
  }

  return (
    <LogoutStyle onClick={ () => logOut() }>
      Log out
    </LogoutStyle>
  )
}

export default Logout
