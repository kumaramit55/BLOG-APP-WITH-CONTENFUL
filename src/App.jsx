import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'
import Articles from './Components/Articeles/Articles'
import About from './Components/About Me/About'
import Contact from './Components/Contact/Contact'

import SingleArticel from './Components/SignleArticle/SingleArticel'





function App() {




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayOut />}>
            <Route path='' element={<Articles />} />
            <Route path='AboutMe' element={<About />} />
            <Route path='ContactMe' element={<Contact />} />
            <Route path=':blogId' element={<SingleArticel/>}/>

          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
