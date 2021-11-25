import React from 'react';
import { Row } from 'react-bootstrap';


export const ItemCount = ( {max, setAdd, add, addItem} ) => {
     
    const deleteItem = () => {
        add > 0 && setAdd(add -1)
    }

    const addOn = () => {
        add < max && setAdd(add + 1)
    }

    return ( 
        
            <Row className="container d-flex ">
                <div className="col-4 d-flex justify-content-around  shadow  ">
                    <button onClick={deleteItem} className="btn col-3" disabled={add === 1}>
                            -
                        </button>
                    <spam className="align-self-center">{add}</spam>
                    <button onClick={addOn} className="btn  col-3">
                            +
                        </button>
                </div>
            
                <button className="btn col-8 text-center shadow" onClick={addItem}> agregar al carrito</button>
            
            </Row>
            
    
            
        
    )
}
