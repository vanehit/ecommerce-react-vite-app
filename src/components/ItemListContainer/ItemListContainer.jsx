import React, { useState, useEffect } from 'react';
import axios from 'axios'; //importamos axios
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams(); // Usamos useParams para obtener la categoría de la URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Definimos el endpoint según la categoría
        let endpoint;
        if (categoryName) {
          if (categoryName === 'books') {
              endpoint = 'http://localhost:5000/api/books';
            } else if (categoryName === 'cars') {
              endpoint = 'http://localhost:5000/api/cars';
            } else if (categoryName === 'electronics') {
              endpoint = 'http://localhost:5000/api/electronics';
            } else {
              console.error(`Unknown category: ${categoryName}`);
              return;
            }
          } else{
            // Si no hay categoría, traemos todos los productos
            endpoint = 'http://localhost:5000/api/all-products';
          }
        
          // Usamos axios para hacer la solicitud al backend
          const response = await axios.get(endpoint);
          const data = response.data;
  
          if (data.length > 0) {
            setProducts(data); // Asignamos los productos devueltos por la API
          } else {
            console.error('No products found.');
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
