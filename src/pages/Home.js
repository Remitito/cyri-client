import { Container, Row, BigButton, ContInfo, NavMenu, NavMenuItem } from "../components/HomeStyle";
import {NavLink} from 'react-router-dom'
import { ActionContext } from '../UserContext'
import { useContext } from "react";
import '../stylesheets/home.css'
import { GiRead } from "react-icons/gi";
import axios from 'axios'


const Home = () => {
  const {action, setAction} = useContext(ActionContext)

  return (
      <Container width={"60%"}>
        <ContInfo>
          <GiRead className="icon" size={70} color="#ebc88b"/>
        {action == "share" ? <h2 style={{color: "#9c7e38", textDecoration: "underline"}}>Your Text Has Been Successfully Uploaded!</h2> : 
        <h2 className="kanit">Welcome to Can You Read It!</h2>}
          <label className="ralewayHome">Check the CEFR level (A1 - C2) of a digital text or browse other texts of the same level</label>
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
              Check a text's level 
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
          <p>Contact: canyoureadit@yandex.com</p>
        </Row>
      </Container>
  );
};
export default Home;
