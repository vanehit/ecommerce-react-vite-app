import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0 && count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={handleDecrement} className="control-button">-</button>
        <span className="count">{count}</span>
        <button onClick={handleIncrement} className="control-button">+</button>
      </div>
      <button onClick={handleAdd} className="add-button">Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
