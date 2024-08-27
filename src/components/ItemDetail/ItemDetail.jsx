import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    console.log(item); // Verifica qué datos se están pasando
    return (
        <div className="item-detail">
            <img src={item.img} alt={item.name || item.title} />
            <h2>{item.name || item.title}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
        </div>
    );
};

export default ItemDetail;
