import ShoppingCartCSS from './ShoppingCart.module.css'
import { ShoppingCartItem } from './shopping_cart/ShoppingCartItem'

export const ShoppingCart = () => {
  return (
    <div className={ShoppingCartCSS.cartContainer}>
      <div className={ShoppingCartCSS.wrapTitle}>Your Shopping Cart</div>
      <ShoppingCartItem />
      <ShoppingCartItem />
      <ShoppingCartItem />
      <ShoppingCartItem />
      <ShoppingCartItem />
      <ShoppingCartItem />

      <div className={ShoppingCartCSS.wrapTotal}>Total: $</div>
      <button>Checkout</button>
      <button>Cancel</button>
    </div>
  )
}
