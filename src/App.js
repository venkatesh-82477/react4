import React from 'react'
import './App.css'
import Home from './Components/Home'
import Student from './Components/Student'
import Contact from './Components/Contact'
import ColorSchemesExample from './Components/Appbar'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
export const App = () => {
  return (
    <>
    <BrowserRouter>
    <ColorSchemesExample/>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Student' element={<Student/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
