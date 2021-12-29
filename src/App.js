import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemsListContainer } from './components/ItemsListContainer/ItemsListContainer';
import { ItemDetailContainer } from './components/ItemDetailCointainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';
import { CartProvider } from './Context/CartContext';
import { Checkout } from './components/Checkout/Checkout';
import { Error404 } from './components/Error404/Error404';


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
          <Route path="/carrito/cartview/checkout" element={ <Checkout/> }/>
          <Route path="*" element={ <Error404/> }/> 
        </Routes> 
      </BrowserRouter>
  </CartProvider> 
  );
}

export default App;
