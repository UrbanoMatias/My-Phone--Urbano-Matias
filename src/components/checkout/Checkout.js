import { collection, Timestamp, addDoc } from 'firebase/firestore/lite';
import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { CartContext } from '../../context/CartContext'
import { db } from '../firebase/config';

export const Checkout = () => {
    
    const {carrito, totalBuy} = useContext(CartContext);

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

    const handleSubmit = (e) => {
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

        const orderRef = collection(db, "orders");
        addDoc(orderRef, orden)
            .then((res) => {
                console.log(res.id)
            })
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

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </div>
    )
}
