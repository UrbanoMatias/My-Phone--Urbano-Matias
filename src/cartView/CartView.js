import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem';

export const CartView = () => {
    
    const {carrito, deleteCart, totalBuy} = useContext(CartContext);

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
                        <div>
                            <p>Total: ${totalBuy()}</p>
                            <button className="btn btn-danger mx-2" onClick={deleteCart}>Vaciar Carrito</button>
                            <Link to="checkout" className="btn btn-success mx-2">Comprar</Link>
                        </div>
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
