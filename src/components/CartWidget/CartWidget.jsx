import cart from './assets/cart1.svg'
import styles from './assets/Cart.module.css'

const CartWidget = () => {
    return (
        <div className='d-flex'>
            <img src={cart} alt="cart-widget" className={styles.Cart} />
            <div className={styles.number}>
                <span className="text-white">0</span>
            </div>
        </div>
    )
}

export default CartWidget

