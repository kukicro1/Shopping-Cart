import AppCSS from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { ShoppingCart } from './components/ShoppingCart'

function App() {
  return (
    <div className={AppCSS.appContainer}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/ShoppingCart' element={<ShoppingCart />}></Route>
      </Routes>
    </div>
  )
}

export default App
