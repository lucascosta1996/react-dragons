import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import { AuthenticationProvider } from './context/AuthenticationContext'
import LoginForm from './components/LoginForm/LoginForm'
import MainWrapper from './layout/MainWrapper'

function App() {
  return(
    <Router>
      <AuthenticationProvider>
        <Route exact path="/" render={ () => (
          <MainWrapper />
        ) } />
        <Route path="/login" component={ LoginForm } />
      </AuthenticationProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
