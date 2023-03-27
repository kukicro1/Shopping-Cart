import ShoppingCartItemCSS from './ShoppingCartItem.module.css'

export const ShoppingCartItem = ({
  color,
  price,
  quantity,
  deleteItem,
  addItem,
}) => {
  const myColor = {
    backgroundColor: color,
  }
  return (
    <div className={ShoppingCartItemCSS.itemContainer}>
      <div className={ShoppingCartItemCSS.colorContainer} style={myColor}></div>
      <div className={ShoppingCartItemCSS.infoContainer}>
        <p>{color}</p>
        <p>{price} $</p>
        <div className={ShoppingCartItemCSS.quantityContainer}>
          <button onClick={() => deleteItem(color)}>-</button>
          <div>{quantity}</div>
          <button onClick={() => addItem(color, price / quantity)}>+</button>
        </div>
      </div>
    </div>
  )
}
