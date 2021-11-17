import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../helpers/perdirDatos'
import { ItemList } from '../itemList/ItemList'

export const ItemsListContainer = () => {


    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([]) 

    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
        .then( (resp) => {
            setProduct(resp)
        })
        .catch( (err) => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <>
            {
                loading ? <h2>Cargando...</h2> : <ItemList product={product}/>
            }
        </>
    )
}
