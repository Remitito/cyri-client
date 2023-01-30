import Navbar from './Navbar'
import Check from './pages/Check'
import Browse from './pages/Browse'
import Home from './pages/Home'
import Error from './pages/Error'
import ViewPage from './pages/ViewPage'
import Register from './pages/Register'
import Forgot from './pages/Forgot'
import Login from './pages/Login'
import Password from './pages/Password'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { UserContext, ActionContext } from './UserContext'
import React, {useState} from 'react'


function App() {
  const [logged, login] = useState(false)
  const [action, setAction] = useState("")

  return (
  <BrowserRouter>
    <UserContext.Provider value={{logged, login}}>
    <ActionContext.Provider value={{action, setAction}}>
      <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="check" element={<Check/>}/>
          <Route path="pages/:pageId" element={<ViewPage/>}/>
          <Route path="browse" element={<Browse/>}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
          <Route path="user/password" element={<Password />}/>
          <Route path="user/forgot" element={<Forgot />}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </ActionContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

