import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting, category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        if (data[category]) {
          setProducts(data[category]);
        } else {
          console.error(`No data found for category: ${category}`);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
