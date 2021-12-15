import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { ItemDetail } from '../itemDetail/ItemDetail'
import { collection, doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const ItemDetailContainer = () => {
    
    const [prod, setProd] = useState()
    const [loading, setLoading] = useState(false)

    const {prodId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const productsRef = collection(db, 'productos');
        const docRef = doc(productsRef, prodId)

        getDoc(docRef)
            .then((doc) => {
                setProd({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => {
                setLoading(false)
            })

    }, [prodId])

    return (
        <Container className="my-5">
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemDetail {...prod}/>
            }
        </Container>
    )
}
