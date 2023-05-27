import cartt from './assets/cart1.svg'
import './assets/CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cart } = useContext(CartContext); // Accedemos al estado del carrito
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Calculamos la cantidad total de items en el carrito
    

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={cartt} alt="cart-widget" className='Cart' />
            <span className="Number">{totalQuantity}</span>
        </Link>
    )
}

export default CartWidget

