import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Compras Zone</div>
      <ul className="nav-links">
        <li><a href="#" className="button">Inicio</a></li>
        <li><a href="#">Vehículos</a></li>
        <li><a href="#">Electrónica</a></li>
        <li><a href="#">Libros</a></li>
      </ul>
      <div className="navbar-right">
        <a href="#" className="button">Login</a>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
