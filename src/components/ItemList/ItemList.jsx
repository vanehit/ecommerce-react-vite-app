import React from 'react';
import Item from '../Item/Item'; // Asegúrate de que este componente exista
import './ItemList.css';

const ItemList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="item-list">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
