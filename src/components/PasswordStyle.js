import styled from 'styled-components'

export const ErrorRow = styled.div `
    display: flex;
    flex-direction: row;
    margin: auto;
`

export const BigButton = styled.button `
    background-color: #49426c;
    color: #ebc88b;
    font-size: xx-large;
    height: 70px;
    text-decoration: none;
    text-align: center;
    line-height: 4.5rem;
    border-radius: 2rem;
    margin-top: 50px;

    &:hover{
        color: #9c7e38;
        border: 0.2rem solid #9c7e38;
        transition: 0.2s ease-in;
    }
`

export const NavMenuItem = styled.li `
    height: 100%;
    padding: 1.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 400;

`
export const ErrorWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: auto;
`

export const FormTextBox = styled.input`
    height: 2rem;
    width: 80%;
    font-size: 1.5rem;
    margin-bottom: 10px;
    ::placeholder,
    ::-webkit-input-placeholder {
        font-size: 1.2rem;
        font-style: italic;
    }
`

export const Form = styled.form `
    max-width: 400px;
    padding: 40px;
    background-color: #49426c;
    border-radius: 10px;
    margin: auto;
    height: 350px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    color: #ebc88b;

    @media screen and (max-width: 960px) {
        margin-left: ${({marginLeft}) => marginLeft ? marginLeft : "30%"};
    }

`

export const FormButton = styled.button `
    background-color: #ebc88b;
    font-size: 2rem;
    border: 0;
    margin-left: 10%;
    border-radius: 5px;
    height: 40px;
    width: 60%;

    &:hover {
        background-color: #9c7e38;
        transition: 0.4s ease-in; 
        
    }

    @media screen and (max-width: 960px) {
        margin-top: 10px;
        display: ${({hideMobile}) => hideMobile ? "none" : ""}
    }
`


export const FormWrapper = styled.div `
    display: flex;
    max-height: 105vh;
    padding: 50px 20px;
    @media screen and (max-width: 960px) {
        margin-right: 150px;
    }
    @media screen and (max-height: 800px) {
        max-height: 170vh;
    }
    @media screen and (max-height: 480px) {
        max-height: 240vh;
    }
`

export const FormError = styled.div `
    color: ${({color}) => color ? color : "red"};
    font-weight: 800;
    background-color: ${({background}) => background ? "#f5eceb" : "none"};
    border-radius: 2rem;
    border-color: ${({borderColor}) => borderColor ? borderColor : "red"};
    border-style: ${({border}) => border ? "solid" : "none"};
    padding: 10px;
    display: inline-block;
    text-align: center;
    font-size: ${({fontSize}) => fontSize ? fontSize : "1.6rem"};
    font-family: 'Shift', sans-serif;
    margin: 10px 0 0 0;
`

export const FormInfo = styled.p`
    font-size: 1.5rem;
    margin: auto;
`