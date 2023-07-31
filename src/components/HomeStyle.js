import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Container = styled.div `
    width: ${props => props.width ? props.width : "80%"};
    margin: 50px auto auto;
    justify-self: center;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 960px) {
        margin-right: 150px;
    }
`
export const Row = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    background-color: ${props => props.color ? props.color : ""};

`

export const MainLabel = styled.label `
    font-size: 1.5rem;
`
export const MainHeader = styled.h2 `
    font-size: 2.5rem;
`

export const Column = styled.div `
    width: ${props => props.width ? props.width : "auto"};
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
    margin-bottom: 30px;
    &:hover{
        color: #9c7e38;
        border: 0.2rem solid #9c7e38;
        transition: 0.2s ease-in;
    }
`

export const ContInfo = styled.div `
    text-align: center;
`

export const NavMenu = styled.ul `
    height: 100%;
    display: flex;
    @media screen and (max-width: 960px) {
        width: 100%;
        margin: auto;
        top: 88px;
        transition: 0.5s all ease-in;
        justify-content: space-evenly;
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
    @media screen and (max-width: 960px) {
        margin: auto;
        height: 70px;
    }
`

export const PicWrapper = styled.div `
    width: 500px;
    margin: auto;
    position: absolute;
    
`

export const LevelTable = styled.div `
    border: solid;
    height: 230px;
`

export const LevelRow = styled.p `
    margin: auto;
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "red"}
`