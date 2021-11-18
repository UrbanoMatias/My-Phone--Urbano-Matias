import './App.css'
import React from 'react';
import {NavBar} from './components/navbar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemsListContainer } from './components/itemsListContainer/itemsListContainer';
import { ItemCount } from './components/itemCount/ItemCount';

function App() {
  
  return (
    <>
      <NavBar/>
      <ItemsListContainer greeting="Completando el desafio"/>
      <ItemCount/> 
    </>
  );
}

export default App;
