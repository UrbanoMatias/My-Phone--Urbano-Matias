import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navbar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemsListContainer } from './components/itemsListContainer/itemsListContainer';
import { ItemDetailContainer } from './components/itemDetailCointainer/ItemDetailContainer';
import { CartView } from './cartView/CartView';
import { CartProvider } from './context/CartContext';


function App() {

  return (
   <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemsListContainer/> }/>
          <Route path="/productos/:catId" element={ <ItemsListContainer/> }/>
          <Route path="/detalles/:prodId" element={ <ItemDetailContainer/> }/>
          <Route path="/carrito/cartview" element={ <CartView/> }/> 
        </Routes> 
      </BrowserRouter>
  </CartProvider> 
  );
}

export default App;
