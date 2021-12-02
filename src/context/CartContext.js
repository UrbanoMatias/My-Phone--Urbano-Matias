import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {


    const [carrito, setCarrito] = useState([])

    const addCart = (item) => {
      setCarrito( [...carrito, item] )
    }
  
    const removeCart = (id) => {
      setCarrito( carrito.filter( prod => prod.id !== id))
    }
  
    const deleteCart = () => {
      setCarrito ([])
    }
  
    const isInCart = (id) => {
      return carrito.some( prod => prod.id === id)
    }
  
    const totalCant = () => {
      return carrito.reduce((acc, prod) => acc + prod.add, 0)
    } 

    const totalBuy = () => {
        return carrito.reduce((acc,prod) => acc + prod.price * prod.add, 0)
    }

    return (
        <CartContext.Provider value={{
            carrito,
            addCart,
            removeCart,
            deleteCart,
            totalCant,
            isInCart,
            totalBuy
        }}>
            {children}
        </CartContext.Provider>
    )
}