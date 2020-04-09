import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { useAuthDispatch, useAuthState } from '../../context/AuthenticationContext'
import { colors } from '../../utils/StyleGuide'
import useForm from '../../hooks/useForm'

const FormWrapper = styled.form`
  width: 30%;
  margin: auto;
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  bottom: 0;

  @media( max-width: 520px ) {
    width: 85%;
  }

  div {
    input {
      border: 1px solid ${colors.purple};
      border-radius: 20px;
      box-sizing: border-box;
      color: ${colors.gray200};
      display: inline-block;
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      margin: 10px 0 20px;
      outline: none;
      padding: 15px 10px;
      transition: 0.2s ease all;
      width: 100%;
    }

    label {
      color: ${colors.purple};
      font-family: 'Nunito', sans-serif;
      font-weight: 600;
    }
  }
  

  .button {
    background: #fff;
    border-radius: 20px;
    border: 2px solid ${colors.purple};
    clear: right;
    color: ${colors.purple};
    cursor: pointer;
    display: inline-block;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    margin-top: 20px;
    padding: 15px 50px;
    transition: 0.2s ease all;
    width: auto;

    &:hover {
      background-color: ${colors.purple};
      color: #fff;
    }
  }
`

function LoginForm( ) {
  const { values, handleChange, handleSubmit } = useForm( handleLogin )
  const dispatch = useAuthDispatch()
  const { loggedIn, users } = useAuthState()

  function handleLogin() {
    const { email, password } = values

    const isUserValid =  users.find( user => ( email === user.email && password === user.password ) )

    if( isUserValid ) {
      dispatch( {
        type: "LOG_IN",
        payload: {
          email,
          password
        }
      } )
    } else {
      alert( 'Email or password is incorrect' )
    }
  }

  if( loggedIn ) return <Redirect to="/" />

  return (
    <FormWrapper onSubmit={ handleSubmit }>
      <div>
        <label className="label">Email</label>
        <input id="email-input" className="input" type="text" name="email" value={ values.email } onChange={ handleChange } />
      </div>
      <div>
        <label className="label">Password</label>
        <input id="password-input" className="input" type="password" name="password" value={ values.password } onChange={ handleChange } />
      </div>
      <button id="submit-login" className="button" type="submit">Login</button>
    </FormWrapper>
  )
}

export default LoginForm
