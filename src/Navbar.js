import React, {useContext, useState} from 'react'
import { StyledNavWrapper, StyledNavContainer, StyledNavLink, 
    NavLogo, NavMenu, NavMenuItem, NavMenuItemLink,
    NavLogoMobile, UserInfo} from './components/StyledNavbarStyle';
import {IoLibrarySharp} from 'react-icons/io5'
import {IoMenu} from 'react-icons/io5'
import {FaTimes} from 'react-icons/fa'
import {NavLink} from 'react-router-dom' 
import {ActionContext } from './UserContext';
const axios = require('axios').default;

function Navbar() {
    const {action, setAction} = useContext(ActionContext)
    const [click, setClick] = useState(false)
    const changeClick = () => {
        setClick(!click);
        setAction("")
    }

    const logout = () => {
        changeClick()
        localStorage.setItem('user', "")
        window.location.reload(false);
    }

    return (
    <StyledNavContainer>
        <StyledNavWrapper>
            <NavLogo as={NavLink} className='bebasNeue' to="/" style={{textDecoration: 'none'}}>
                <IoLibrarySharp className='bebasNeue' style={{paddingLeft: "20px"}} size={"4rem"}/>
                Can You Read It?
            </NavLogo>
            <NavLogoMobile onClick={() => changeClick()}>
                {
                    click ? <FaTimes/> : <IoMenu/>
                }
            </NavLogoMobile>
            <NavMenu click={click}>
            {/* Section for conditionally rendered Login/Logout links*/}
                {!localStorage.getItem('user') ? 
                <>
                <NavMenuItem onClick={() => changeClick()}>
                    <NavMenuItemLink as={NavLink} to="/login" className='bebasNeue'>
                        Login
                    </NavMenuItemLink>
                </NavMenuItem>
                <NavMenuItem onClick={() => changeClick()}>
                    <NavMenuItemLink as={NavLink} to="/register" className='bebasNeue'>
                        Register
                    </NavMenuItemLink>
                </NavMenuItem>
                </>
                : 
                <>
                {localStorage.getItem('user') ? 
                <UserInfo className='bebasNeue'>Logged in as {localStorage.getItem('user')} </UserInfo> : <></>}
                <NavMenuItem onClick={() => changeClick()}>
                    <NavMenuItemLink as={NavLink} to="/user/password" className='bebasNeue'>
                        Account
                    </NavMenuItemLink>
                </NavMenuItem>
                <NavMenuItem onClick={() => logout()}>
                    <NavMenuItemLink as={NavLink} to="/" className='bebasNeue'>
                        Logout
                    </NavMenuItemLink>
                </NavMenuItem>
                <NavMenuItem onClick={() => changeClick()}>
                    <NavMenuItemLink as={NavLink} to="/check" className='bebasNeue'>
                        Check
                    </NavMenuItemLink>
                </NavMenuItem>
                </>
                }
            {/* Browse link*/}
                <NavMenuItem onClick={() => changeClick()}>
                    <NavMenuItemLink as={NavLink} to="/browse" className='bebasNeue'>
                        Browse
                    </NavMenuItemLink>
                </NavMenuItem>
            </NavMenu>
        </StyledNavWrapper>
    </StyledNavContainer>
    )}

export default Navbar;