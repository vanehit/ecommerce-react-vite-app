import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => {
    const handleAdd = (quantity) => {
        console.log(`Cantidad agregada: ${quantity}`);
      };

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemCount stock={20} initial={1} onAdd={handleAdd} />
    </div>
  );
}

export default ItemListContainer;
