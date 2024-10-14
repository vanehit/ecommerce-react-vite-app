import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Página de inicio */}
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Compras Zone!" />} />
        
        {/* Página de categoría, muestra ítems por tipo */}
        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        {/* Página de detalles, muestra un ítem específico */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
