import { Container, Row, BigButton, ContInfo, MainHeader, MainLabel, NavMenu, NavMenuItem } from "../components/HomeStyle";
import {NavLink} from 'react-router-dom'
import { ActionContext } from '../UserContext'
import { useContext, useEffect } from "react";
import '../stylesheets/home.css'
import { GiRead } from "react-icons/gi";
import axios from 'axios'


const Home = () => {
  const {action, setAction} = useContext(ActionContext) // if a text has been shared then it will show a message on homepage

  return (
      <Container width={"60%"}>
        <ContInfo>
          <GiRead className="icon" size={70} color="#ebc88b"/>
        {action == "share" ? <h2 style={{color: "#9c7e38", textDecoration: "underline"}}>Your Text Has Been Successfully Uploaded!</h2> : 
        <MainHeader className="kanit">Welcome to Can You Read It!</MainHeader>}
          <MainLabel className="ralewayHome">Check the CEFR level (A1 - C2) of a digital text or browse other texts of the same level</MainLabel>
        </ContInfo>
        <Row>
        <NavMenu>
          {localStorage.getItem('loggedIn') ? 
          <>
          <NavMenuItem>
              <BigButton as={NavLink} to="/login" className='bebasNeue'>
                  Login/Register
              </BigButton>
          </NavMenuItem>
          <NavMenuItem>
              <BigButton as={NavLink} to="/browse" className='bebasNeue'>
              Browse Texts
              </BigButton>
          </NavMenuItem> </>
          :
          <>
          <NavMenuItem>
          <BigButton as={NavLink} onClick={() => {setAction("")}} to="/check" className='bebasNeue'>
              Check text's level 
          </BigButton>
          </NavMenuItem>
          <NavMenuItem>
              <BigButton as={NavLink} onClick={() => {setAction("")}} to="/browse" className='bebasNeue'>
                  Browse texts 
              </BigButton>
          </NavMenuItem></>
          }
          </NavMenu>
        </Row>
        <Row>
          <p style={{marginTop: '50px'}}>Contact: canyoureadit@yandex.com</p>
        </Row>
      </Container>
  );
};
export default Home;
