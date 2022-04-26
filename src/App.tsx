import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Details from './pages/Details'
import List from './pages/List'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App