import React from 'react'
import DragonsList from '../components/Dragons/DragonsList'
import { useAuthState } from '../context/AuthenticationContext'
import { Redirect } from 'react-router-dom'
import DragonsListProvider from '../context/DragonsListContext'

export default function MainWrapper() {
  const { loggedIn } = useAuthState()

  if ( loggedIn ) {
    return (
      <DragonsListProvider>
        <DragonsList />
      </DragonsListProvider>
    )
  } else {
    return <Redirect to="/login" />
  }
}