import ProductCardCSS from './ProductCard.module.css'

export const ProductCard = ({ color, price, handlePurchase }) => {
  const myStyle = {
    backgroundColor: color,
  }

  return (
    <div className={ProductCardCSS.card}>
      <div style={myStyle} className={ProductCardCSS.colorContainer}></div>
      <div>Color: {color}</div>
      <div>Price: {price} $</div>
      <button
        className={ProductCardCSS.button}
        onClick={() => handlePurchase(color, price)}
      >
        Purchase
      </button>
    </div>
  )
}
