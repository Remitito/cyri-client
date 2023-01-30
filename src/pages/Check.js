import {FormWrapper, Form, FormTextArea, FormButton,
FormFieldSet, FormError, FormInfo, ErrorWrapper, Checkbox,
FormRow, FormColumn, FormTextBox, NavMenuItem, BigButton, ErrorRow} from '../components/CheckStyle'
import React, {useState, useContext} from 'react';
import { ActionContext } from '../UserContext';
import {useNavigate, NavLink} from 'react-router-dom'
const axios = require('axios').default;

const initialState = {
  language: "english",
  text: "",
  show: "form", // conditionally renders first page of form
  level: "",
  url: "",
  title: "",
  ownText: false
}

var URLRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
const regex = new RegExp(URLRegex)
const date = new Date()
const currentDate = date.getDate() + date.getMonth() + date.getFullYear()

const Check = () => {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState("")
  const {action, setAction} = useContext(ActionContext)
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    if(state.text.split(" ").length < 10) {
      setError("Text must have at least 10 words")
      return;
    }
    if(state.text.length < 30) {
      setError("Text must be at least 30 characters in length")
      return;
    }
    axios.post('https://can-you-read-it-api.onrender.com/check', {
      text: state.text,
      language: 'english',
    })
    .then((response) => {
      setError('')
      setState(oldValue => ({...oldValue, 
        level: response.data,
        user: localStorage.getItem('user'),
        show: "result"}))
    }
      )
    .catch(function(error) {
    })
  }

  const shareText = e => {
    e.preventDefault();
    try {
      if(localStorage.getItem('posts') == currentDate) {
        setError("Users can only share 1 text per day")
        return
      } 
    }
    catch {
      localStorage.setItem('posts', 0)
    }
    if(!state.ownText) {
      if(state.url.length === 0) {
        setError("Please credit the creator but sharing the URL of the original source")
        return
      }
      if(state.url.length > 0) {
        if(!state.url.match(regex)) {
          setError("Please enter a valid URL")
          return;
        }
        if(state.url.length > 65) {
          setError("URL is too long. Please just use main part e.g. www.website.com")
        }
      }
    }
    if(state.title === '') {
      setError("Please enter a title")
      return;
    }
    if(state.title.length > 30) {
      setError("Title can be a maximum of 30 characters")
    }
    axios.post('https://can-you-read-it-api.onrender.com/check/share', {
      state: state,
    })
    .then(setState(initialState))
    .then(setError(""))
    .then(setAction("share"))
    .then(() => {
        let textsShared = localStorage.getItem('posts')
        localStorage.setItem('posts', currentDate)
    })
    .then(navigate('/'))
    .catch(function(error) {
    })
  }

  const handleChange = e => {
    setError('')
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState(oldValue => ({...oldValue, [name]: value}))
  }

  const goBack = () => {
    setState({show: "form"})
  }

  return (
    <FormWrapper height={state.show === "form" ? "100vh" : "100vh"}>
      {!localStorage.getItem('user') ?
      <ErrorWrapper>
        <FormInfo className='josefinSans'>Please login if you wish to check a text's level</FormInfo>
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
      </ErrorWrapper>
      :
      <Form className='josefinSans form" ? ' onSubmit={handleSubmit}>
        {state.show === "form" ? 
        <>
          <h1 className="arima">Check a Text's Level</h1>
          <FormInfo className="arima">Paste the text you want to check into the box below:</FormInfo>
          <FormTextArea name="text" value={state.text}  onChange={handleChange} />
          <FormButton  hide={error.length > 0} margin="30px 0 0 27%" smallerWidth="75%" name="show" value="result" type="submit">Show Level</FormButton>
          {error && (
            <FormRow marginTop="20px">
              <FormError border={error.length > 0} background={error.length > 0}><p>{error}</p></FormError>
            </FormRow>
          )} 
        </> : 
        <>
          <FormInfo className="arima">This text is suitable for {state.level} level learners! </FormInfo>
          <FormInfo className="arima">Help out other {state.level} level users by sharing this text!</FormInfo>
          <FormInfo className="arima">If you are the original author of the text then sharing a URL is optional</FormInfo>
          <div style={{marginBottom: "20px"}}></div>
          <FormRow>
            <FormColumn width="20%">
            <FormInfo className="arima" htmlFor="url">URL:</FormInfo>
            </FormColumn>
            <FormColumn width="75%">
              <FormTextBox name="url" value={state.url} onChange={handleChange}
              placeholder="Enter the URL of the original source"></FormTextBox>
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn width="65%"/>
            <FormColumn>
            <div style={{display: "flex", flexDirection: "row", marginBottom: "20px", marginTop: "-10px"}}>
                <label style={{fontSize: "18px"}} className="arima" htmlFor="url">I'm the author</label>
                <Checkbox type="checkbox" value={state.ownText} name="ownText" onChange={handleChange}/>
            </div>
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn width="20%">
              <FormInfo className="arima" htmlFor="title">Title:</FormInfo>
            </FormColumn>
            <FormColumn width="75%">
              <FormTextBox name="title" value={state.title} onChange={handleChange}
              placeholder="E.g 'Food culture in India'"></FormTextBox>
            </FormColumn>
          </FormRow>
          <FormRow marginTop="20px" switchToColumn addSpace>
            <FormButton hide={error.length > 0} width="80%" name="show" value="form" smallerWidth="60%"
            onClick={shareText}>Post Text</FormButton> 
            <FormButton hide={error.length > 0} width="80%" name="show" value="form" smallerWidth="60%"
            onClick={goBack}>Go Back</FormButton>
          </FormRow> 
          <FormRow marginTop="20px">
            {error && (
              <FormError border={error.length > 0} background={error.length > 0}><p>{error}</p></FormError>
            )}
          </FormRow>
        </>
          }
      </Form>
}
    </FormWrapper>
  );
};
export default Check;