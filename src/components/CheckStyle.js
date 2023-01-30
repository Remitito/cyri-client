import styled, {css} from 'styled-components'


export const SharedFormStyles = css`
border-radius: 5px;
border: 1px solid;
margin: 10px 0 0px 0;
padding: 20px;
box-sizing: border-box;
`

export const FormWrapper = styled.div `
    display: flex;
    justify-content: center;
    height: ${({height}) => height};
    padding: 50px 20px;
    margin: auto;
    /* @media screen and (max-width: 960px) {
        height: 80vh;
    } */
    @media screen and (max-height: 800px) {
        max-height: 170vh;
    }
    @media screen and (max-height: 480px) {
        max-height: 240vh;
    }
`

export const Form = styled.form `
    padding: 40px;
    width: 600px;
    background-color: #49426c;
    border-radius: 10px;
    height: 70%;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    color: #ebc88b;

    @media screen and (max-width: 960px) {
        margin-left: 10%;
        height: 80%;
    }
`

export const FormTextBox = styled.input`
    margin: auto;
    width: 80%;
    height: 2rem;
    font-size: 1.5rem;
    margin-bottom: 10px;
    ::placeholder,
    ::-webkit-input-placeholder {
        font-size: 1.2rem;
        font-style: italic;
    }
`

export const FormTextArea = styled.textarea `
    width: 100%;
    min-height: 200px;
    font-size: 1rem;
    resize: none;
    ${SharedFormStyles}
`

export const FormButton = styled.button `
    display: ${({hide}) => hide ? "none" : "block"};
    background-color: #ebc88b;
    font-size: 2rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    margin: ${({margin}) => margin ? margin : "10px"};

    cursor: pointer;
    width: ${({width}) => width ? width : ""};
    &:hover {
        background-color: #9c7e38;
        transition: 0.4s ease-in;  
    }
    @media screen and (max-width: 960px) {
        width: ${({smallerWidth}) => smallerWidth ? smallerWidth : ""};
        margin: 10px 0 0 13%;
    }
`

export const FormRow = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: ${({marginTop}) => marginTop ? marginTop : ""};
    justify-content: ${({addSpace}) => addSpace ? "space-between" : ""};
    max-width: ${({maxWidth}) => maxWidth ? maxWidth : ""};
    @media screen and (max-width: 960px) {
        flex-direction: ${({switchToColumn}) => switchToColumn ? "column" : "row"};
    }
`

export const FormColumn = styled.div `
    display: flex;
    flex-direction: column;
    width: ${({width}) => width ? width : ""};
`

export const FormFieldSet = styled.fieldset `
    border: 1px solid;
    border-radius: 5px;
    margin: 20px auto;
    display: flex;
    width: 90%;
    font-size: 2rem;
    legend {
        padding: 0 10px;
    }
    input {
        margin-right: 100px
    }
`

export const FormError = styled.div `
    color: ${({color}) => color ? color : "red"};
    font-weight: 800;
    background-color: ${({background}) => background ? "#f5eceb" : "none"};
    border-radius: 2rem;
    border-color: red;
    border-style: ${({border}) => border ? "solid" : "none"};
    padding: 10px;
    font-size: 1.2rem;
    text-align: center;
    width: 100%;
    font-family: 'Shift', sans-serif;
    margin: auto;
`

export const FormInfo = styled.p`
    font-size: 1.3rem;
    margin: auto;
    margin-top: ${({marginTop}) => marginTop ? marginTop : ""};
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
    width: 250px;
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

export const Checkbox = styled.input `
    margin-top: 7px;
`