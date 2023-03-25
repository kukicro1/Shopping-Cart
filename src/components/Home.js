import { Link } from 'react-router-dom'
import HomeCSS from './Home.module.css'

export const Home = () => {
  return (
    <div className={HomeCSS.homeContainer}>
      {/* <div className={HomeCSS.messageContainer}> */}
      <div className={HomeCSS.message}>There is no such shop as Best Shop!</div>
      <div className={HomeCSS.bestShop}>Best Shopping Ever</div>
      {/* </div> */}
      <div className={HomeCSS.wrapButton}>
        <Link to='/Products' className={HomeCSS.goShopping}>
          Go Shopping
        </Link>
      </div>
    </div>
  )
}
