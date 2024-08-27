import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const getItem = async (id) => {
  try {
    const response = await fetch('/data.json');
    const data = await response.json();
    const allItems = [].concat(...Object.values(data));
    return allItems.find(item => item.id === parseInt(id));
  } catch (error) {
    console.error('Error fetching the item:', error);
    return null;
  }
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getItem(id);
        setItem(data);
      } catch (error) {
        console.error('Error fetching the item:', error);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} /> : <p>Cargando detalles...</p>}
    </div>
  );
};

export default ItemDetailContainer;
