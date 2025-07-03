
import { Link, Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.component'
import './header.scss';

import ProductHunt from '../ProductHuntBadge/productHunt'
const Header = () => {


  return (
    <>
      <nav>
        <Link to="/">
          <div className="logo"></div>
        </Link>

        <div className="nav-links">
          <ProductHunt />

          <Link className="nav-link" to="about">
            About
          </Link>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Header