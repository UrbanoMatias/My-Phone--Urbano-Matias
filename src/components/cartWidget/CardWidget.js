import React, { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    
    const {totalCant} = useContext(CartContext)

    return (
        <div className="cart">
            <BsFillCartFill/>
            <spam>{totalCant()}</spam>
        </div>
    )
}