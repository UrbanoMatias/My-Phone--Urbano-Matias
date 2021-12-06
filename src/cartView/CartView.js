import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem';

export const CartView = () => {
    
    const {carrito, deleteCart} = useContext(CartContext);

    return (
        <div  className="container-fluid my-5">
            
            {
                carrito.length > 0
                ?   <>
                        <h2>CartView</h2>
                        <hr/>
                        <section>
                        {
                            carrito.map((prod) => <CartItem {...prod}/>)
                        }
                        <hr/>
                        <button className="btn btn-danger mx-2" onClick={deleteCart}>Vaciar Carrito</button>
                        <button className="btn btn-success mx-2">Terminar Compra</button>
                        </section>
                    </>
                
                :   <>

                        <h2>No agregaste items al carrito aún</h2>
                        <hr/>
                        <Link to="/" className="btn btn-primary">Ir de compras</Link>
                    </>
            }
        </div>
    )
}
