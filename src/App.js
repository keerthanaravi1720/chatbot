import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import AppHeader from './pages/Header'
import Modal from './pages/Modal'
import Example from './pages/Example'
import AppFooter from './pages/AppFooter'
import SideBar from './pages/SideBar'



const App = () => {
  return (

    <div>
     <Routes>
      {/* <Route path='/' element={<Chat/>}/> */}
      <Route path='/' element={<Navbar/>}/>
      <Route path='/h' element={<AppHeader/>}/>
      <Route path='/m' element={<Modal/>}/>
      <Route path='/e' element={<Example/>}/>
    <Route path='/app' element={<AppFooter/>}/>
    <Route path='/s' element={<SideBar/>}/>
     </Routes>
      </div>
  )
}

export default App
