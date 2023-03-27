import AppCSS from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { ShoppingCart } from './components/ShoppingCart'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react'

const App = () => {
  const [purchasedItems, setPurchasedItems] = useState([])
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setQuantity(purchasedItems.length)
  }, [purchasedItems])

  const handlePurchase = (color, price) => {
    setPurchasedItems((prevPurchased) => [
      ...prevPurchased,
      { name: color, price: price },
    ])
  }

  const deleteItem = (color) => {
    setPurchasedItems((prevPurchased) => {
      const index = prevPurchased.findIndex((item) => item.name === color)
      if (index !== -1) {
        const newPurchased = [...prevPurchased]
        newPurchased.splice(index, 1)
        return newPurchased
      }
      return prevPurchased
    })
  }

  const addItem = (color, price) => {
    setPurchasedItems((prevPurchased) => [
      ...prevPurchased,
      { name: color, price: price },
    ])
  }

  return (
    <div className={AppCSS.appContainer}>
      <Navbar quantity={quantity} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/Products'
          element={<Products handlePurchase={handlePurchase} />}
        />
        <Route path='/Contact' element={<Contact />} />
        <Route
          path='/ShoppingCart'
          element={
            <ShoppingCart
              purchasedItems={purchasedItems}
              addItem={addItem}
              deleteItem={deleteItem}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
