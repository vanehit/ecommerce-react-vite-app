import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/Navbar/NavBar';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/CartContext/CartContext';


function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          {/* Página de inicio */}
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Compras Zone!" />} />
          
          {/* Página de categoría, muestra ítems por tipo */}
          <Route path="/category/:categoryName" element={<ItemListContainer />} />

          {/* Página de detalles, muestra un ítem específico */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          {/* Ruta del carrito */}
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
