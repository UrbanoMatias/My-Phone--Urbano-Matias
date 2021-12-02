import React, { useContext } from 'react'
import { Table } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'
import { BsTrash } from 'react-icons/bs'
export const CartView = () => {
    
    const {carrito, deleteCart, removeCart} = useContext(CartContext);

    return (
        <div>
            <h2>CartView</h2>
            
            <section>
            {
                carrito.map((prod) => (
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{prod.id}</td>
                                <td>{prod.img1}</td>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td><button
                                        className="btn btn-danger"
                                        onClick={() => { removeCart(prod.id) }}
                                    >
                                    <BsTrash/>   
                                    </button></td>
                                </tr>
                            </tbody>
                            
                    </Table>
                    
                ))
            }
            <button className="btn btn-danger mx-2" onClick={deleteCart}>Vaciar Carrito</button>
            <button className="btn btn-success mx-2">Terminar Compra</button>
            </section>

        </div>
    )
}
