import React, {useState, useContext} from 'react';
import {FormWrapper, Form, FormButton, FormError, FormRow, 
  FormTextBox, NavMenuItem, NavMenuItemLink, ChangeMethod} from '../components/LoginStyle'
import {useNavigate, NavLink} from 'react-router-dom'
import { UserContext } from '../UserContext'

const axios = require('axios').default;

const initialState = {
    username: "",
    email: "",
    password: "",
    loginMethod: "username"
}



const Login = () => {
    const {logged, login} = useContext(UserContext)
    const [state, setState] = useState(initialState)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleResponse = (response) => {
      if(response == "fail") {
        setError("Invalid user credentials")
      }
      else {
        localStorage.setItem('user', state.username)
        
        setState(initialState)
        login(true)
        navigate('/')
      }
    }

    const handleSubmit = async e => {
      e.preventDefault();
      if(state.loginMethod === 'email') {
        if(state.email.length === 0) {
          setError("Please enter your email")
          return
        }
      }
      else {
        if(state.username.length === 0) {
          setError("Please enter your username")
          return
        }
      }
      if (state.password.length == 0) {
        setError("Please enter your password")
        return
      }
      console.log(state)
      axios.post('https://can-you-read-it-api.onrender.com/login', {
        state: state
      })
      .then(response => handleResponse(response))
  }   

    const handleChange = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setState(oldValue => ({...oldValue, [name]: value}))
    }

    return (
      <FormWrapper>
        <Form className='josefinSans' onSubmit={handleSubmit}>
          <FormRow maxWidth="100%">
            <h1>Login</h1>
            <NavMenuItem>
              <NavMenuItemLink as={NavLink} to="/register">
                  Click to Register
              </NavMenuItemLink>
            </NavMenuItem>
            </FormRow>
            {state.loginMethod === "username" ?
            <>
            <FormRow>
              <FormTextBox width="80%" name='username' type='text' value={state.username}
              onChange={handleChange} placeholder='Username'/>
            </FormRow>
            <FormRow>
              <ChangeMethod className='josefinSans' type="button" name='loginMethod' value='email' onClick={handleChange}>Login with email</ChangeMethod>
            </FormRow>
            </>
            :
            <>
            <FormRow>
              <FormTextBox name='email' type='text' value={state.email} 
              onChange={handleChange} placeholder='Email'/>
            </FormRow>
            <FormRow>
            <ChangeMethod className='josefinSans'  type="button" name='loginMethod' value='username' onClick={handleChange}>Login with username</ChangeMethod>
            </FormRow>
            </>
            }
            <FormRow>
              <FormTextBox name='password' type='password' value={state.password} 
              onChange={handleChange} placeholder='Password'/>
            </FormRow>
            <FormRow changeToColumn maxWidth="80%" addSpace>
              <FormButton type="submit" name="show" value="form">Login</FormButton>
              <FormButton type="button" onClick={() => {setState({username: "", email: "", password: ""})}}>Clear</FormButton>
            </FormRow>
            <NavMenuItem>
              <NavMenuItemLink as={NavLink} to="/user/forgot">
                  Forgotten Password
              </NavMenuItemLink>
            </NavMenuItem>
            <FormError border={error.length > 0} background={error.length > 0}>{error}</FormError>
        </Form>
      </FormWrapper>
    );
  };
  export default Login