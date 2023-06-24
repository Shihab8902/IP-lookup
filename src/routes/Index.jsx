import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FetchData from '../components/FetchData'
import Home from '../views/Home'

const Index = () => {
  return <div>
      <BrowserRouter>
      
            <Routes>
                <Route path='/' element = {<Home />} />
                <Route path='/result' element = {<FetchData />} />
            </Routes>
      
      </BrowserRouter>
  </div>
}

export default Index