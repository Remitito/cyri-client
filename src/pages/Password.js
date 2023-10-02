import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {FormWrapper, Form, FormButton,
    FormError, FormInfo, FormTextBox, ErrorWrapper,
     NavMenuItem, BigButton, ErrorRow} from '../components/PasswordStyle'
const axios = require('axios').default;

const initialState = {
    currentPass: "",
    newPass: "",
}

const Password = () => {
    const [state, setState] = useState(initialState)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const passwordRegex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/)

    const handleSubmit = async e => {
      e.preventDefault();
      if(state.currentPass.length == 0) {
        setError("Please enter your current password")
        return
      }
      if(state.currentPass.length == 0) {
        setError("Please enter your new password")
        return
      }
      if(!state.newPass.match(passwordRegex)) {
        setError("Password must be between 6-20 characters and contain at least one number, uppercase letter, lowercase letter, and special character")
        return
      }
      axios.post('https://can-you-read-it-api.onrender.com/user/password', {
          state: state,
          token: localStorage.getItem('token'),
          username: localStorage.getItem('user'),
      })
      .then(response => handleResponse(response.data))
      .then(setState(initialState))
    }   

    const handleResponse = (data) => {
      if(data === "success") {
        setSuccess("Password changed")
      }
      else if (data === "again") {
        setError("Please login again")
      }
      else if (data === "wrong") {
        setError("Password incorrect")
      }
      setState(initialState)
    }

    const handleChange = e => {
      setSuccess("")
      setError("")
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setState(oldValue => ({...oldValue, [name]: value}))
    }

    return (
      <FormWrapper>
      {!localStorage.getItem('user').length > 0 ?
        <ErrorWrapper>
          <FormInfo className='josefinSans'>Please login if you wish to change password</FormInfo>
          <ErrorRow>
            <NavMenuItem>
              <BigButton as={NavLink} to="/login" className='bebasNeue'>
              Login
              </BigButton>
            </NavMenuItem>
            <NavMenuItem>
              <BigButton as={NavLink} to="/register" className='bebasNeue'>
              Register
              </BigButton>
            </NavMenuItem>
          </ErrorRow>
        </ErrorWrapper> :
        <Form className='josefinSans' onSubmit={handleSubmit}>
            <h1 className="arima">Update Password</h1>
            <FormTextBox name='currentPass' type='password' value={state.currentPass}
            onChange={handleChange} placeholder='Current password'/>
            <FormTextBox name='newPass' type='password' value={state.newPass} 
            onChange={handleChange} placeholder='New password'/>
            <>
            {error.length == 0 ? 
              <FormButton>Confirm</FormButton> 
              :
              <FormError fontSize="1.1rem" border={error.length > 0} background={error.length > 0}>{error}</FormError>
            }
            </>
        </Form>}
      </FormWrapper>
    );
  };
  export default Password