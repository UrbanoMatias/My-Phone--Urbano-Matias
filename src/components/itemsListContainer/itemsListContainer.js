import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const ItemsListContainer = () => {
    

    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([]) 

    const  { catId }  = useParams()


    useEffect(() => {
        setLoading(true)

        const productsRef = collection(db, 'productos')
        const q = query(productsRef, where('category', '==', catId))

        getDocs(q)
            .then((collection) => {
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(items)
                
                setProduct(items)
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
