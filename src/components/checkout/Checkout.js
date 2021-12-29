import { collection, Timestamp, getDocs, documentId, writeBatch, query, where, addDoc } from 'firebase/firestore/lite';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CartContext } from '../../Context/CartContext'
import { db } from '../Firebase/config';

export const Checkout = () => {

    const {carrito, totalBuy, deleteCart} = useContext(CartContext);

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (values.nombre.length < 4){
            Swal.fire({
                icon:'icon',
                title:'Nombre invalido'
            })
            return
        }

        if(values.apellido.length < 4) {
            Swal.fire({
                icon:'icon',
                title:'Apellido invalido'
            })
        }

        const orden = {
            buyer:{...values},
            items: carrito,
            total: totalBuy(),
            date: Timestamp.fromDate( new Date() )
        }

        const batch = writeBatch(db);

        const orderRef = collection(db, "orders");
        const productsRef = collection(db, "productos");
        const q = query(productsRef, where(documentId(), 'in', carrito.map(id => id.id)))
        const outOfStock = [];
        const products = await getDocs(q);

        products.docs.forEach((doc) => {
            const itemsUpdate = carrito.find((prod) => prod.id === doc.id)
            if (doc.data().stock >= itemsUpdate.add) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemsUpdate.add
                })
            } else {
                outOfStock.push(itemsUpdate)
            } 
        })

        if(outOfStock.length === 0) {
            addDoc(orderRef, orden)
            .then((res) => {
                batch.commit();
                Swal.fire({
                    icon: 'success',
                    title: 'Su orden ha sido registrada',
                    text: `Su numero de orden es: ${res.id}`
                })
                deleteCart();
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Lo lamentamos, no tenemos stock de los siguientes productos: ',
                text: outOfStock.map(prod => prod.name).join(', ')
            })
        }
    }

    return (
        <div className="container my-5">
            <h2>Resumen de Compra</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    name="nombre"
                    value={values.nombre}
                    className="form-control my-2"
                    type="text"
                    placeholder="nombre"
                />
                {values.nombre.length < 4 && <small>Nombre inválido</small>}

                <input
                    onChange={handleInputChange}
                    name="apellido"
                    value={values.apellido}
                    className="form-control my-2"
                    type="text"
                    placeholder="apellido"
                />
                {values.apellido.length < 4 && <small>Apellido inválido</small>}

                <input
                    onChange={handleInputChange}
                    name="email"
                    value={values.email}
                    className="form-control my-2"
                    type="email"
                    placeholder="email"
                />
            {values.email.length < 4 && <small>Email inválido</small>}

            <Link to="/" type="submit" className="btn btn-primary">Finalizar Compra</Link>
        </form>
        </div>
    )
}
