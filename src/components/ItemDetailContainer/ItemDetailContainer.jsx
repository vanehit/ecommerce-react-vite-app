import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const getItem = async (id) => {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error('Error fetching the item');
    }
    const data = await response.json();

    // Crear un arreglo combinando todos los ítems de las diferentes categorías
    const allItems = [
      ...data.books,
      ...data.cars,
      ...data.electronics,
    ];
    
    // Buscar el ítem por ID
    return allItems.find(item => item.id === parseInt(id));
  } catch (error) {
    console.error('Error fetching the item:', error);
    return null;
  }
};
const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      setError(null); // Reiniciar el error al empezar a cargar
      try {
        const data = await getItem(id);
        if (data) {
          setItem(data);
        } else {
          setError('Item not found');
        }
      } catch (error) {
        setError('Error fetching the item');
        console.error('Error fetching the item:', error);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <div className="item-detail-container">
      {error && <p>{error}</p>}
      {item ? <ItemDetail item={item} /> : <p>Cargando detalles...</p>}
    </div>
  );
};

export default ItemDetailContainer;
