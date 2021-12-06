import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { BsTrash } from 'react-icons/bs'


export const CartItem = ({id, name, price, img1}) => {
    
    const {removeCart} = useContext(CartContext)

    return (
        <div>
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
                    <td>{id}</td>
                    <td><img className="w-25" src={img1} alt={name}/></td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td><button
                            className="btn btn-danger"
                            onClick={() => { removeCart(id) }}
                        >
                            <BsTrash/>   
                        </button></td>
                        </tr>
                </tbody>
                                    
            </Table>
        </div>
    )
}
