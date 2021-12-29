import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'
import { db } from '../Firebase/config'


export const useProducts = (catId) => {
    
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([]) 

    useEffect(() => {
        setLoading(true)

        const productsRef = collection(db, 'productos')
        const q = catId ? query(productsRef, where('category', '==', catId)) : productsRef

        getDocs(q)
            .then((collection) => {
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProduct(items)
                console.log(items)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return {
        loading,
        product
    }
}
