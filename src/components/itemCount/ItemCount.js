import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';


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
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dummyimage.com/200x200/000/fff.png" />
            <Card.Body>
                <Card.Title>Samsung galaxy s21</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <p>Stock: 5</p>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
        <Table striped bordered hover variant="dark container">
        <thead>
            <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Samsung Galaxy s21 ultra</td>
            <td>{add}</td>
            <td>
                <button onClick={addOn} className="btn btn-info btn-sm m-1">
                        agregar
                        </button>
                <button onClick={deleteItem} className="btn btn-danger btn-sm m-1">
                        borrar
                    </button>
            </td>
            </tr>
        </tbody>
        </Table>
        </div>
        
    )
}
