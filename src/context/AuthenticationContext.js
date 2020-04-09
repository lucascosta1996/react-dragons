import React, { createContext, useContext, useReducer } from 'react'

export const AuthStateContext = createContext()
export const AuthDispatchContext = createContext()

const initialState = {
  users: [
    {
      email: "root@root.com",
      password: "root"
    },
    {
      email: "root2@root.com",
      password: "123456"
    }
  ],
  userLoggedIn: JSON.parse( localStorage.getItem( 'userLoggedIn' ) ),
  loggedIn: JSON.parse( localStorage.getItem( 'loggedIn' ) )
}

function authReducer( state, action ) {
  switch( action.type ) {
    case "UPDATE_USER":
      return {
        users: [ ...state.users, action.payload ]
      }
    case "LOG_IN":
      localStorage.setItem( 'loggedIn', true )
      localStorage.setItem( 'userLoggedIn', JSON.stringify( action.payload ) )
      return {
        ...state,
        loggedIn: JSON.parse( localStorage.getItem( 'loggedIn' ) ),
        userLoggedIn: JSON.parse( localStorage.getItem( 'userLoggedIn' ) )
      }
    case "LOG_OUT":
      localStorage.setItem( 'loggedIn', false ),
      localStorage.removeItem( 'userLoggedIn' )
      return {
        ...state,
        loggedIn: JSON.parse( localStorage.getItem( 'loggedIn' ) )
      }
    default:
      throw new Error()
  }
}

export function AuthenticationProvider( {children} ) {
  const [ state, dispatch ] = useReducer( authReducer, initialState )

  return (
    <AuthStateContext.Provider value={ state }>
      <AuthDispatchContext.Provider value={ dispatch }>
        { children }
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export function useAuthState() {
  const context = useContext( AuthStateContext )
  if ( context === undefined ) {
    throw new Error()
  }
  return context
}

export function useAuthDispatch() {
  const context = useContext( AuthDispatchContext )
  if ( context === undefined ) {
    throw new Error()
  }
  return context
}
