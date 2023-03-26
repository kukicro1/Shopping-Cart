import ShoppingCartItemCSS from './ShoppingCartItem.module.css'

export const ShoppingCartItem = () => {
  return (
    <div className={ShoppingCartItemCSS.itemContainer}>
      <div className={ShoppingCartItemCSS.colorContainer}></div>
      <div className={ShoppingCartItemCSS.infoContainer}>
        <p>Which color</p>
        <p>123 $</p>
        <div className={ShoppingCartItemCSS.quantityContainer}>
          <button>-</button>
          <div>quantity</div>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}
