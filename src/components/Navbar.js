import { Link, NavLink } from 'react-router-dom'
import NavbarCSS from './Navbar.module.css'

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return isActive
      ? NavbarCSS.navLink + ' ' + NavbarCSS.active
      : NavbarCSS.navLink
  }

  return (
    <nav className={NavbarCSS.nav}>
      <Link to='/' className={NavbarCSS.logo}>
        Best Shop
      </Link>
      <div className={NavbarCSS.navLinkContainer}>
        <NavLink to='/' className={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to='/Products' className={navLinkStyles}>
          Products
        </NavLink>
        <NavLink to='/Contact' className={navLinkStyles}>
          Contact
        </NavLink>
      </div>
      <Link to='/ShoppingCart'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48'
          viewBox='0 96 960 960'
          width='48'
          className={NavbarCSS.cart}
        >
          <path d='M286.788 975Q257 975 236 953.788q-21-21.213-21-51Q215 873 236.212 852q21.213-21 51-21Q317 831 338 852.212q21 21.213 21 51Q359 933 337.788 954q-21.213 21-51 21Zm400 0Q657 975 636 953.788q-21-21.213-21-51Q615 873 636.212 852q21.213-21 51-21Q717 831 738 852.212q21 21.213 21 51Q759 933 737.788 954q-21.213 21-51 21ZM235 315l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841 297 829 318L694 561q-11 19-28.559 30.5Q647.881 603 627 603H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z' />
        </svg>
      </Link>
    </nav>
  )
}
