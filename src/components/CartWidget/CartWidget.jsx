import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../CartContext/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cartCount } = useCart();

  if (cartCount === 0) return null;

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CartWidget;
