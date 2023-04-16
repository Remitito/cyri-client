import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

import '../styles.css'

export const StyledNavContainer = styled.div `
    width: 100%;
    height: 105px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #49426c;
`

export const StyledNavWrapper = styled.div `
    width: 100%;
    height: 80%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const NavLogo = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 2rem;
    color: #ebc88b;
    padding-left: 1rem;
    &:hover{
        color: #9c7e38;
        transition: 0.3s ease-in;
    }

`

export const NavMenu = styled.ul `
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 10%;
    @media screen and (max-width: 960px) {
        width: auto;
        height: 90vh;
        position: absolute;
        top: 88px;
        left: ${({click}) => click ? 0 : "-100%"};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: #49426c;
    }
`

export const NavMenuItem = styled.li `
    height: 100%;
    padding: 1.1rem 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 400;

    @media screen and (max-width: 960px) {
        width: 50%;
        margin-right: 20%;
        height: 70px;
    }
`

export const NavMenuItemLink = styled.a `
    text-decoration: none;
    color: #ebc88b;

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
    
    @media screen and (max-width: 960px) {
        display: flex;
        color: #ebc88b;
        font-size: 2rem;
        padding-right: 1rem;
    }
`

export const UserInfo = styled.div `
    color: #ebc88b;
    text-decoration: underline;
    font-size: 1.5rem;
    padding-right: 1rem;
`
