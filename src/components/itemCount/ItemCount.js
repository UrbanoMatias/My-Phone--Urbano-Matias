import React, {useState} from 'react';


export const ItemCount = () => {
     
    

    const [add, setAdd] = useState(0)

    let stock = 5;
    
    const addOn = () =>{
        setAdd( add + 1)
        if(add>=stock){
            setAdd(stock)
            return alert("Limite de stock");
        }
    }
    const deleteItem = () =>{
        setAdd( add - 1)
        if(add===0){
            return setAdd(0)
        }
    }

    return ( 
        <div className="container">
            <p>stock: {stock}</p>
            <p> cantidad : {add}</p>
                <button onClick={addOn} className="btn btn-info btn-sm m-1">
                        agregar
                        </button>
                <button onClick={deleteItem} className="btn btn-danger btn-sm m-1">
                        borrar
                    </button>
            
        </div>
    )
}
