import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { pedirDatos } from '../../helpers/perdirDatos'
import { ItemDetail } from '../itemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    
    const [prod, setProd] = useState()
    const [loading, setLoading] = useState(false)

    const {prodId} = useParams()

    useEffect(()=>{
        setLoading(true)
        pedirDatos()
            .then(resp => {
                setProd( resp.find( prod => prod.id === Number(prodId)))
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
