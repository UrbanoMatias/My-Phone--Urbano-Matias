import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Items = ({id, category, name, desc, price, img1, img2, img3}) => {
    return (
            <Card key={id} style={{ width: '18rem' }} className="m-4">
                    <Card.Img variant="top" src={img1} alt={name} />
                <Card.Body>
                    <Card.Text>{category}</Card.Text>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Card.Text>Precio: ${price}</Card.Text>
                    <Link  to={`/detalles/${id}`} className="btn btn-primary">ver más</Link>
                </Card.Body>
            </Card>
        
    )
}
