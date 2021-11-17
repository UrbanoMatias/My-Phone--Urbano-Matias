import React from 'react'
import { Card, Button,} from 'react-bootstrap'

export const Items = ({prod}) => {
    return (
            <Card key={prod.id} style={{ width: '18rem' }} className="m-4">
                    <Card.Img variant="top" src={prod.img} alt={prod.name} />
                <Card.Body>
                    <Card.Text>{prod.brand}</Card.Text>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>{prod.desc}</Card.Text>
                    <Card.Text>Precio: ${prod.price}</Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        
    )
}
