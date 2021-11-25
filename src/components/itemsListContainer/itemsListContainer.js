import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/perdirDatos'
import { ItemList } from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemsListContainer = () => {


    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([]) 

    const  { catId }  = useParams()
 

    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then( (resp) => {
            
                if (!catId) {
                    setProduct(resp)
                } else {
                    setProduct( resp.filter( prod => prod.category === catId)) 
                }
            
        })
        .catch( (err) => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [catId])

    return (
        <>
            {
                loading ? <h2>Cargando...</h2> : <ItemList product={product}/>
            }
        </>
    )
}
