import styled, {css} from 'styled-components'
    
export const FormTextBox = styled.input`
    height: 2rem;
    ${({width}) => width ? width : "100%"};
    font-size: 1.5rem;
    margin-bottom: 10px;
    ::placeholder,
    ::-webkit-input-placeholder {
        font-size: 1.2rem;
    }
`
export const FormButton = styled.button `
    background-color: #ebc88b;
    font-size: ${({smallFont}) => smallFont ? "1rem" : "2rem"};
    border: 0;
    border-radius: 5px;
    height: 40px;
    margin: auto;
    margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : ""};;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
        background-color: #9c7e38;
        transition: 0.4s ease-in; 
        
    }

    @media screen and (max-width: 960px) {
        margin-top: 10px;
        width: 100%;
        display: ${({hideMobile}) => hideMobile ? "none" : ""}
    }
`

export const NavMenuItem = styled.li `
    padding: 1.5rem 1.5rem;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 400;
`

export const NavMenuItemLink = styled.a `
    color: #ebc88b;
    margin: auto;
    text-decoration: none;
    &:hover{
        color: #9c7e38;
        border-bottom: 0.3rem solid #ebc08b;
        transition: 0.3s ease-in;
    }
`

export const ChangeMethod = styled.button `
    color: #ebc88b;
    margin: auto;
    margin-bottom: 5px;
    background: none;
    border: none;
    font-size: 1.5rem;
    font-weight: 100;
    font-style: italic;
    &:hover{
        color: #9c7e38;
        border-bottom: 0.3rem solid #ebc08b;
        transition: 0.3s ease-in;
    }
`

export const NavLogoMobile = styled.div `
    display: none;

    &:hover{
        color: #9c7e38;
        transition: 0.4s ease-in;  
    }
`

export const FormRow = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin: auto;
    justify-content: ${({addSpace}) => addSpace ? "space-between" : ""};
    max-width: ${({maxWidth}) => maxWidth ? maxWidth : ""};
    @media screen and (max-width: 960px) {
        flex-direction: ${({changeToColumn}) => changeToColumn ? "column" : ""};

    }
`

export const FormWrapper = styled.div `
    display: flex;
    justify-content: center;
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

export const Form = styled.form `
    max-width: 600px;
    padding: 40px;
    background-color: #49426c;
    border-radius: 10px;
    margin: auto;
    height: 80%;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    color: #ebc88b;

    @media screen and (max-width: 960px) {
        margin-left: 30%;
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
    font-size: ${({fontSize}) => fontSize ? fontSize : "1.6rem"};
    font-family: 'Shift', sans-serif;
    margin: 10px 0 10px 0;
`

export const FormInfo = styled.p`
    font-size: 1.5rem;
    margin: auto;
`

export const LoginRegisterTitle = styled.h1 `
    font-family: 'Shift';
    font-size: 2rem;
`