import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'

export const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/Products'></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}
