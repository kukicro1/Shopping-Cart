import { ProductCard } from './products/ProductCard'
import ProductsCSS from './Products.module.css'

export const Products = () => {
  return (
    <div className={ProductsCSS.productContainer}>
      <ProductCard price={10} color={'red'} />
      <ProductCard price={11} color={'pink'} />
      <ProductCard price={12} color={'blue'} />
      <ProductCard price={13} color={'green'} />
      <ProductCard price={14} color={'yellow'} />
      <ProductCard price={15} color={'black'} />
      <ProductCard price={16} color={'purple'} />
      <ProductCard price={17} color={'brown'} />
      <ProductCard price={18} color={'gray'} />
      <ProductCard price={19} color={'crimson'} />
      <ProductCard price={20} color={'cyan'} />
      <ProductCard price={21} color={'orange'} />
    </div>
  )
}
