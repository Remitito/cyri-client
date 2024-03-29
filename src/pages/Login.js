import React, {useState, useContext} from 'react';
import {FormWrapper, Form, FormButton, FormError, FormRow, 
  FormTextBox, NavMenuItem, NavMenuItemLink, ChangeMethod, LoginRegisterTitle} from '../components/LoginStyle'
import {useNavigate, NavLink} from 'react-router-dom'
import { UserContext } from '../UserContext'

const axios = require('axios').default;

const initialState = {
    usernameEmail: "",
    password: "",
    }

const Login = () => {
    const {logged, login} = useContext(UserContext)
    const [state, setState] = useState(initialState)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleResponse = (response) => {
      if(response.data == "fail") {
        setError("Invalid credentials")
      }
      else {
        localStorage.setItem('user', response.data)
        setState(initialState)
        login(true)
        navigate('/')
      }
    }

    const handleSubmit = async e => {
      e.preventDefault();
      if(state.usernameEmail.length === 0) {
          setError("Please enter your username or email")
          return
      }
      if (state.password.length == 0) {
        setError("Please enter your password")
        return
      }
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
            <LoginRegisterTitle>Login</LoginRegisterTitle>
            <NavMenuItem>
              <NavMenuItemLink as={NavLink} to="/register">
                  Click to Register
              </NavMenuItemLink>
            </NavMenuItem>
            </FormRow>
            <>
            <FormRow>
              <FormTextBox width="80%" name='usernameEmail' type='text' value={state.usernameEmail}
              onChange={handleChange} placeholder='Username/Email'/>
            </FormRow>

            </>
            <FormRow>
              <FormTextBox name='password' type='password' value={state.password} 
              onChange={handleChange} placeholder='Password'/>
            </FormRow>
            <FormRow changeToColumn maxWidth="80%" addSpace>
              <FormButton type="submit" name="show" value="form">Login</FormButton>
              <FormButton type="button" onClick={() => {setState({usernameEmail: "", password: ""})}}>Clear</FormButton>
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