import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './assets/Favicon.png';
import './assets/navbar.css'
import { NavLink, Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg gradient">
      <Link to='/'>
        <a className="navbar-brand logo" href="/">
          <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
        </a>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav links">
          <NavLink to={`/category/Comedor`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
            <li className="nav-item">
              <button className="btn nav-link text-white">Comedor</button>
            </li>
          </NavLink>
          <NavLink to={`/category/Living`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
          <li className="nav-item">
            <button className="btn nav-link text-white">Living</button>
          </li>
          </NavLink>
          <NavLink to={`/category/Dormitorio`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
          <li className="nav-item">
            <button className="btn nav-link text-white">Dormitorio</button>
          </li>
          </NavLink>
          <NavLink to={`/category/Varios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
          <li className="nav-item">
            <button className="btn nav-link text-white">Varios</button>
          </li>
          </NavLink>
        </ul>
        
      </div>
      <CartWidget className="cart-container"/>
    </nav>
  )
}

export default NavBar

