import { ProductCard } from './products/ProductCard'
import ProductsCSS from './Products.module.css'

export const Products = ({ handlePurchase }) => {
  return (
    <div className={ProductsCSS.productContainer}>
      <ProductCard handlePurchase={handlePurchase} price={10} color={'red'} />
      <ProductCard handlePurchase={handlePurchase} price={11} color={'pink'} />
      <ProductCard handlePurchase={handlePurchase} price={12} color={'blue'} />
      <ProductCard handlePurchase={handlePurchase} price={13} color={'green'} />
      <ProductCard handlePurchase={handlePurchase} price={15} color={'black'} />
      <ProductCard handlePurchase={handlePurchase} price={17} color={'brown'} />
      <ProductCard handlePurchase={handlePurchase} price={18} color={'gray'} />
      <ProductCard handlePurchase={handlePurchase} price={20} color={'cyan'} />
      <ProductCard
        handlePurchase={handlePurchase}
        price={14}
        color={'yellow'}
      />
      <ProductCard
        handlePurchase={handlePurchase}
        price={16}
        color={'purple'}
      />
      <ProductCard
        handlePurchase={handlePurchase}
        price={19}
        color={'crimson'}
      />
      <ProductCard
        handlePurchase={handlePurchase}
        price={21}
        color={'orange'}
      />
    </div>
  )
}
