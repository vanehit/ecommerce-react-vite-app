import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../CartContext/CartContext';

const ItemDetail = ({ item }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addToCart } = useCart(); // Función para agregar al carrito
  const navigate = useNavigate();

  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity);
    addToCart(item, quantity); // Agrega el producto al carrito
  };

  const handleFinishPurchase = () => {
    navigate('/cart');
  };

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.name || item.title} />
      <h2>{item.name || item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>

      {quantityAdded === 0 ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
      ) : (
        <button className="finish-purchase-button" onClick={handleFinishPurchase}>
          Terminar mi compra
        </button>
      )}
    </div>
  );
};

export default ItemDetail;
