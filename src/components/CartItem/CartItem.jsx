import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './assets/CartItem.css'

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(id);
  };

  const subtotal = price * quantity;

  return (
    <div className="card cart-item-card">
      <div className="card-body-cart">
        <h4>{name}</h4>
        <p className="mx-2">Precio x Unidad: ${price}</p>
        <p className="mx-2">Cantidad: {quantity}</p>
        <p className="mx-2">Subtotal: ${subtotal}</p>
        <button onClick={handleRemove} className="btn btn-danger d-flex">Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;



