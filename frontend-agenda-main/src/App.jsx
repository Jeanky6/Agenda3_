import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./pages/Login"
import Users from './pages/Users'
import Areas from './pages/Areas'
import Agendas from './pages/Agendas'
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Login}/>
      <Route path='/users' Component={Users}/>
      <Route path='/areas' Component={Areas}/>
    <Route path='/agendas' Component={Agendas}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
