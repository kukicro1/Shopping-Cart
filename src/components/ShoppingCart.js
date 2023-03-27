import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartCSS from './ShoppingCart.module.css'
import { ShoppingCartItem } from './shopping_cart/ShoppingCartItem'

export const ShoppingCart = ({ purchasedItems, addItem, deleteItem }) => {
  const [groupedColorsObject, setGroupedColorsObject] = useState([])
  const [groupedColorsArray, setGroupedColorsArray] = useState([])

  useEffect(() => {
    setGroupedColorsArray(
      Object.entries(groupedColorsObject).map(
        ([color, { price, quantity }]) => ({
          color,
          price,
          quantity,
        })
      )
    )
  }, [groupedColorsObject])

  useEffect(() => {
    setGroupedColorsObject(
      purchasedItems.reduce((acc, { name, price }) => {
        if (!acc[name]) {
          acc[name] = { price, quantity: 1 }
        } else {
          acc[name].price += price
          acc[name].quantity++
        }
        return acc
      }, {})
    )
  }, [purchasedItems])

  const totalPrice = purchasedItems.reduce(
    (total, item) => total + item.price,
    0
  )

  return (
    <div className={ShoppingCartCSS.cartContainer}>
      <div className={ShoppingCartCSS.wrapTitle}>Your Shopping Cart</div>
      {groupedColorsArray
        .sort((a, b) => a.color.localeCompare(b.color))
        .map((item) => {
          return (
            <ShoppingCartItem
              key={item.color}
              color={item.color}
              price={item.price}
              quantity={item.quantity}
              addItem={addItem}
              deleteItem={deleteItem}
            />
          )
        })}
      <div className={ShoppingCartCSS.wrapTotal}>Total: {totalPrice} $</div>
      <button className={ShoppingCartCSS.button}>Checkout</button>
      <Link to='/Products'>
        <button className={ShoppingCartCSS.button}>Cancel</button>
      </Link>
    </div>
  )
}
