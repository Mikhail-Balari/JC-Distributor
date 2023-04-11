import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './assets/Favicon.png';
import './assets/navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg gradient">
      <a className="navbar-brand logo" href="/">
        <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav links">
          <li className="nav-item">
            <button className="btn nav-link text-white">Comedor</button>
          </li>
          <li className="nav-item">
            <button className="btn nav-link text-white">Living</button>
          </li>
          <li className="nav-item">
            <button className="btn nav-link text-white">Dormitorio</button>
          </li>
          <li className="nav-item">
            <button className="btn nav-link text-white">Varios</button>
          </li>
        </ul>
        
      </div>
      <CartWidget className="cart-container"/>
    </nav>
  )
}

export default NavBar

