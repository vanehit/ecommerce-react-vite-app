import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams(); // Usamos useParams para obtener la categoría de la URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        
        if (categoryName) {
          // Si existe una categoría, filtrar por categoría
          if (data[categoryName]) {
            setProducts(data[categoryName]);
          } else {
            console.error(`No data found for category: ${categoryName}`);
          }
        } else {
          // Si no hay categoría, mostramos todos los productos
          const allProducts = [].concat(...Object.values(data)); // se combinan los productos de todas las categorías
          setProducts(allProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
