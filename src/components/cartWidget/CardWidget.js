import React, { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import './cartWidget.css'

export const CartWidget = () => {
    
    const {totalCant, carrito} = useContext(CartContext)

    return (
        <div className={carrito.length === 0 ? 'hidden widget' : 'widget'}>
            <Link to="carrito/cartview">
            <BsFillCartFill className="cart"/>
            <spam>{totalCant()}</spam>
            </Link>
        </div>
    )
}