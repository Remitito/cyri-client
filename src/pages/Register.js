import React, {useState, useContext} from 'react';
import {FormWrapper, Form, FormButton,
    FormError, FormInfo, NavMenuItem, NavMenuItemLink,
    FormRow, FormTextBox} from '../components/RegisterStyle'
import {useNavigate, NavLink} from 'react-router-dom'
import { UserContext } from '../UserContext'
const axios = require('axios').default;

const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    answer: ""
}

const usernameRegex = /^(?=.*[A-Za-z0-9]).{6,12}$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Add some formatting, especially password-checking
const Register = () => {
    const [state, setState] = useState(initialState)
    const [error, setError] = useState("")
    const {logged, login} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = async e => {
      e.preventDefault();
      if(state.username === '') {
        setError("You must enter a username between 6-12 characters")
        return
      }
      if(!state.username.match(usernameRegex)) {
        setError("Your username must contain 6-12 characters")
        return
      }
      if(!state.email.toLowerCase().match(emailRegex)) {
        setError("Please enter a valid email address")
        return
      }
      if(!state.password.match(passwordRegex)) {
        setError("Password must contain at least 8 characters, including a number, letter, and special character")
        return
      }
      if(state.password !== state.confirmPassword) {
        setError("Passwords don't match!")
        return
      }
      if(state.answer.toString() !== '7' && state.answer.toLowerCase() !== 'seven') {
        setError("You did not answer the bottom question correctly")
        return
      }
      axios.post('https://can-you-read-it-api.onrender.com/register', {
          state: state,
      })
      .then(loginUser)
      .then(setState(initialState))
      .then(setError(""))
      .then(navigate('/login'))
    }   

    const loginUser = () => {
      axios.post('https://can-you-read-it-api.onrender.com/login', {
          state: state,
      }).then(response => handleLoginResponse(response.data))
    }

    const handleLoginResponse = (data) => {
        localStorage.setItem('token', data)
        localStorage.setItem('user', state.username)
        login(true)
        navigate('/')
    }

    const handleChange = e => {
        setError("")
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setState(oldValue => ({...oldValue, [name]: value}))
    }

    return (
      <FormWrapper>
        <Form className='josefinSans' onSubmit={handleSubmit}>
          <FormRow maxWidth="100%">
              <h1>Register</h1>
              <NavMenuItem>
                      <NavMenuItemLink 
                      as={NavLink} to="/login">
                          Click to login
                      </NavMenuItemLink>
                  </NavMenuItem>
          </FormRow>
            <FormTextBox width="80%" name='username' type='text' value={state.username}
            onChange={handleChange} placeholder='Username'/>
            <FormTextBox name='email' type='text' value={state.email} 
            onChange={handleChange} placeholder='Email'/>
            <FormTextBox name='password' type='password' value={state.password} 
            onChange={handleChange} placeholder='Password'/>
            <FormTextBox name='confirmPassword' type='password' value={state.confirmPassword} 
            onChange={handleChange} placeholder='Confirm Password'/>
            <FormTextBox name='answer' type='text' value={state.answer} 
            onChange={handleChange} placeholder='What is one plus six???'/>
            <FormRow changeToColumn maxWidth="60%">
              <FormButton type="submit" name="show" value="form">Register</FormButton>
              <FormButton type="button" onClick={() => {setState({username: "", email: "", password: ""})}}>Clear</FormButton> 
            </FormRow>
            <FormError fontSize="1.2rem" border={error.length > 0} background={error.length > 0}>{error}</FormError>
        </Form>
      </FormWrapper>
    );
  };
  export default Register