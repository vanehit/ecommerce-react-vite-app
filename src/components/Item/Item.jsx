// Item.js
import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import './Item.css'; 

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img src={product.img} alt={product.name || product.title} />
      <h2>{product.name || product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Anchor to={`/item/${product.id}`}>Ver detalles</Anchor>
    </div>
  );
};

export default Item;
