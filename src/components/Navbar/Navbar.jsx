import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Compras Zone</div>
      <ul className="nav-links">
        <li><Anchor to="/" className="button">Inicio</Anchor></li>
        <li><Anchor to="/category/cars">Vehículos</Anchor></li>
        <li><Anchor to="/category/electronics">Electrónica</Anchor></li>
        <li><Anchor to="/category/books">Libros</Anchor></li>
      </ul>
      <div className="navbar-right">
        <Anchor to="/login" className="button">Login</Anchor>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
