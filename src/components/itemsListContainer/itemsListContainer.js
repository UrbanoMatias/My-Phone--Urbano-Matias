import React from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useProducts } from './useProducts';
import { Loader } from '../Loader/Loader';

export const ItemsListContainer = () => {

    const  { catId }  = useParams();
    const {loading, product} = useProducts(catId)
    
    
    return (
        <>
            {
                loading ? <Loader/> : <ItemList product={product}/>
            }
        </>
    )
}
