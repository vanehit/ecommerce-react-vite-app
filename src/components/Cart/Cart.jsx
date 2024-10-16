import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cartContext/CartContext';

const Cart = () => {
  const { cartItems, cartCount, removeFromCart, getTotalPrice } = useCart();

  return (
    <div>
      <h1>Carrito de compras</h1>
      {cartItems.length > 0 ? (
        <div>
          <p>Tienes {cartCount} productos en tu carrito.</p>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <h3>{item.name || item.title}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio por unidad: ${item.price}</p>
                <p>Total por este ítem: ${item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Precio total: ${getTotalPrice()}</h3>
        </div>
      ) : (
        <div>
          <p>Tu carrito está vacío.</p>
          <Link to="/">Volver al catálogo</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
