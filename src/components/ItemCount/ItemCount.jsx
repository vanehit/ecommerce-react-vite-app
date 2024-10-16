import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count);
      setAdded(true);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      {added ? (
        <button>Terminar mi compra</button>
      ) : (
        <>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
          <button onClick={handleAdd}>Agregar al carrito</button>
        </>
      )}
    </div>
  );
};

export default ItemCount;
