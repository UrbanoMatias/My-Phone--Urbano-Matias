import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navbar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemsListContainer } from './components/itemsListContainer/itemsListContainer';
import { ItemDetailContainer } from './components/itemDetailCointainer/ItemDetailContainer';

function App() {
  
  return (
    
    <BrowserRouter>
      
      <NavBar/>
      
      <Routes>
        <Route path="/" element={ <ItemsListContainer/> }/>
        <Route path="/productos/:catId" element={ <ItemsListContainer/> }/>
        <Route path="/detalles/:prodId" element={ <ItemDetailContainer/> }/>
        
      </Routes>
      
    </BrowserRouter>
       
    
  );
}

export default App;
