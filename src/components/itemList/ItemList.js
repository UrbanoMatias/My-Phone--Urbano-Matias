import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Items } from '../items/Items'

export const ItemList = ({product}) => {
    return (
        <Container className="my-5">
            <h2>Productos</h2>
            <hr/>

            <Row>
                {product.map((prod) => <Items prod={prod}/>)}
            </Row>
        </Container>
    )
}
