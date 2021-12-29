import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { collection, doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../Firebase/config'
import { Loader } from '../Loader/Loader'

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
                ? <Loader/>
                : <ItemDetail {...prod}/>
            }
        </Container>
    )
}
